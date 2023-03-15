import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {AuthorizationStatus} from './const';
import {offers} from './mocks/offers';


const settings = {
  offers: offers,
  placesCount: offers.length,
  authProps: {
    authStatus: AuthorizationStatus.Auth,
    userName: 'DanningKruger@gmail.com',
  }
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App {...settings}/>
  </React.StrictMode>,
);
