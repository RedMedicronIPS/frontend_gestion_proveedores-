import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import type { JSX } from "react";
import type { RootState } from "../store/store";

interface Props {
  children: JSX.Element;
  roles?: string[]; // ejemplo: ['admin']
}

export const PrivateRoute = ({ children, roles }: Props) => {
  const auth = useAppSelector((state: RootState) => state.auth);

  if (!auth.token) return <Navigate to="/login" />;

  if (roles && !roles.includes(auth.user?.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};
