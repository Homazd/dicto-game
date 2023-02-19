import {Route, Routes} from "react-router-dom";
import {LoginScreen} from "./screens/Login";
import {SignUpScreen} from "./screens/SignUp";
import React from "react";
import { Dashboard } from "./screens/Dashboard";
import { PrivateRoute } from "../../../../components/PrivateRoute";

export function AuthScreens() {
    return (
        <Routes>
            <PrivateRoute exact path="/auth" element={<Dashboard/>}/>;
            <Route path="/auth/login" element={<LoginScreen/>}/>;
            <Route path="/auth/signUp" element={<SignUpScreen/>}/>
        </Routes>
    )
}