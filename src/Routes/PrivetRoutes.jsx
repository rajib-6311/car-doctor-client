import {  useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    // console.log(location.pathname);
    
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user?.email) {
        return children;
    }
    
    return <Navigate state={ location.pathname} to='/login'></Navigate>
};

export default PrivetRoutes;