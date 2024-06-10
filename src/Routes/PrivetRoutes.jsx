import {  useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { Navigate } from "react-router-dom";


const PrivetRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user?.email) {
        return children;
    }
    
    return <Navigate to='/login'></Navigate>
};

export default PrivetRoutes;