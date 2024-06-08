import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../FireBase/FireBase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const Provider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth ,email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
           console.log('Current User', currentUser);
           setLoading(false);
       })
        return () => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;