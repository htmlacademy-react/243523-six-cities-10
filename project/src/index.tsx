import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'components/app/app';
import {offers} from 'mocks/offers';
import {cities} from 'mocks/cities';

const Settings = {
  RENTAL_AMOUNT: 312,
  CURRENT_CITY: cities[0]
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App rentalAmount={Settings.RENTAL_AMOUNT} offers={offers} currentCity={Settings.CURRENT_CITY}/>
  </React.StrictMode>,
);
