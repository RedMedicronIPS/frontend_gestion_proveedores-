import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import Loading from "../components/common/Loading"; // Esta importación ahora funcionará

interface Props {
  children: React.ReactNode;
  roles?: string[];
}

export function PrivateRoute({ children, roles }: Props) {
  const { token, user, loading } = useAppSelector((state) => state.auth);

  if (loading) {
    return <Loading />;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (roles && !roles.includes(user?.role || "")) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
}
