import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import {AuthorizationStatus} from './const';
import { store } from './store';
import { fetchOffersAction } from './store/api-actions';
import AuthData from './types/auth-data';


const authProps: AuthData = {
  authStatus: AuthorizationStatus.NoAuth,
  userName: 'DanningKruger@gmail.com',
};

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App {...authProps}/>
    </Provider>
  </React.StrictMode>,
);
