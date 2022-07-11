import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Settings = {
  RENTAL_AMOUNT: 312,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App rentalAmount={Settings.RENTAL_AMOUNT}/>
  </React.StrictMode>,
);
