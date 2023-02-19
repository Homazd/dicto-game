// import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
// import { checkIsLoggedIn } from "../../utils/check-is-logged-in.utils";
import { Route, Redirect } from "react-router-dom";

export function PrivateRoute({ component: Component, ...rest }) {
//   const location = useLocation();
//   const isLoggedIn = checkIsLoggedIn();
  const { user } = useAuth();

  return (
    <>
      {/* isLoggedIn ? <Outlet /> :{" "}
      <Navigate to={`auth/login?callbackURI=${location.pathname}`} /> */}
      <Route
        {...rest}
        render={(props) => {
          // Renders the page only if `user` is present (user is authenticated)
          // Otherwise, redirect to the login page
          return user ? <Component {...props} /> : <Redirect to="/auth/login" />;
        }}
      ></Route>
    </>
  );
}
