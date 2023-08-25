import { AuthorizationStatus} from '../../const';
import { AppRoute } from '../app/app';
import { Navigate } from 'react-router-dom';
import { PrivateRouteProps } from '../../types/types';


function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.LogIn} />
  );
}

export default PrivateRoute;
