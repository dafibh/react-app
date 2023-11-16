import {Navigate, Outlet} from "react-router-dom";
import SignInBasic from "layouts/MD/authentication/sign-in/basic";

const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};

export function InverseProtectedRoutes() {
  return useAuth() ? <Navigate to="/" /> : <Outlet />;
}

export default function ProtectedRoutes() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <SignInBasic />; // Expected to return a 404 component instead
}
