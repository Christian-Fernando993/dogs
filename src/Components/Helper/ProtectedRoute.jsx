import React from "react";
import { UserContext } from "../../UserContext";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext);

    if(login === true) {
        return children
    } else if(login === false) {
        return <Navigate to='/login'/>
    } else {
        return <></>
    }
};
