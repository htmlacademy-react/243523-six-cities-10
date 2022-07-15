import {FC} from 'react';
import {Navigate} from 'react-router-dom';

import {AppRoute, AuthorisationStatus} from 'types/const';

type PrivateRouteProps = {
  authorisationStatus: AuthorisationStatus,
  children: JSX.Element
}

export const PrivateRoute: FC<PrivateRouteProps> = ({authorisationStatus, children}) =>
  authorisationStatus === AuthorisationStatus.Auth ?
    children :
    <Navigate to={AppRoute.Login}/>;

export default PrivateRoute;
