import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

export default function ProtectedRouteElement({ element, path }) {
  const { user } = useSelector((store) => store.auth);

  return <>{user ? element : <Navigate to={"/login"} />}</>;
}
