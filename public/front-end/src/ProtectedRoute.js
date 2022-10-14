import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
// const user = "token from cookie";
const user = null;

return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
