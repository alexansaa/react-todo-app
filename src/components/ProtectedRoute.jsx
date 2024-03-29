import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  const location = useLocation();
  console.log(location);
  if (!user) {
    return <Navigate
      to="/login"
      state={{ pathname: location.pathname }}
      replace
    />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
