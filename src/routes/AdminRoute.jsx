import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import Loader from "../components/shared/loader/Loader";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loader />;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={location.pathname} replace></Navigate>;
};

export default AdminRoute;
