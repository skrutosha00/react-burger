import { ReactElement } from "react";
import { useAppSelector } from "hooks/reduxHooks";
import { Navigate, useLocation } from "react-router-dom";
import { TLocation } from "services/types/appTypes";

type TProps = {
  children: ReactElement;
  anonymousOnly?: boolean;
};

export default function ProtectedRoute({
  children,
  anonymousOnly = false,
}: TProps) {
  const { user } = useAppSelector((store) => store.auth);
  const location: TLocation = useLocation();

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
