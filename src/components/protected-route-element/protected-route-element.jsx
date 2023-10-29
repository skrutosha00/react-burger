import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

// export default function ProtectedRouteElement({ element }) {
//   const location = useLocation();
//   const { user } = useSelector((store) => store.auth);

//   return <>{user ? element : <Navigate to={"/login"} state={{ from: location }} />}</>;
// }

export default function ProtectedRoute({ children, anonymousOnly = false }) {
  const { user } = useSelector((store) => store.auth);
  const location = useLocation();

  const isLoggedIn = !!user;
  const fromLocation = location.state?.from || "/";

  if (anonymousOnly && isLoggedIn) {
    return <Navigate to={fromLocation} />;
  }

  if (!anonymousOnly && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
