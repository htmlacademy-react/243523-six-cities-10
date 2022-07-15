import {FC} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from 'pages/login';
import Main from 'pages/main';
import Room from 'pages/room';
import Favorites from 'pages/favorites';
import NotFound from 'pages/not-found';
import {AppRoute, AuthorisationStatus} from 'types/const';

import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  rentalAmount: number,
}

export const App: FC<AppScreenProps> = ({rentalAmount}) => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root} element={<Main rentalAmount={rentalAmount}/>}/>
      <Route index element={<Main rentalAmount={rentalAmount}/>}/>
      <Route path={AppRoute.Room} element={<Room/>}/>
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorisationStatus={AuthorisationStatus.NotAuth}>
            <Favorites/>
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Login}
        element={<Login/>}
      />
      <Route
        path="*"
        element={<NotFound/>}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
