import { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const{user,loading} =useContext(AuthContext);
    
    console.log(location)

    if(loading){
        return  <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
        return children
    }
    return (
       <Navigate to="/login"></Navigate>
    );
};

export default PrivateRoute;