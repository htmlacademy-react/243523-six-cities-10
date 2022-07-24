import {FC} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from 'pages/login';
import Main from 'pages/main';
import Room from 'pages/room';
import Favorites from 'pages/favorites';
import NotFound from 'pages/not-found';
import PrivateRoute from 'components/private-route';
import {City, Offer} from 'types/offers';
import {AppRoute, AuthorisationStatus} from 'types/const';

type AppScreenProps = {
  rentalAmount: number,
  offers: Offer[];
  currentCity: City;
}

export const App: FC<AppScreenProps> = ({rentalAmount, offers, currentCity}) => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root}
        element={<Main rentalAmount={rentalAmount} offers={offers} currentCity={currentCity}/>}
      />
      <Route index element={<Main rentalAmount={rentalAmount} offers={offers} currentCity={currentCity}/>}/>
      <Route path={`${AppRoute.Room}/:id`} element={<Room offers={offers}/>}/>
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorisationStatus={AuthorisationStatus.Auth}>
            <Favorites offers={offers}/>
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
