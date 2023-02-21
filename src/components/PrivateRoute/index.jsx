// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { checkIsLoggedIn } from "../../utils/check-is-logged-in.utils";
import {Redirect, Route} from "react-router-dom";

export function PrivateRoute({path, children}) {
    const username = !!localStorage.getItem("username")
    if (username) {
        return (
            <Route exact path={path}>
                {children}
            </Route>
        );
    } else {
        return <Redirect to="/auth/signup"/>
    }

}
