import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import Card from './types/card';
import {AuthorizationStatus} from './const';

const cards: Card[] = [
  {
    id: 1,
    img: 'img/apartment-01.jpg',
    isPremium: true,
    price: 120,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    raiting: 4.8
  },
  {
    id: 2,
    img: 'img/room.jpg',
    isPremium: false,
    price: 80,
    title: 'Wood and stone place',
    type: 'room',
    raiting: 4
  },
  {
    id: 3,
    img: 'img/apartment-02.jpg',
    isPremium: false,
    price: 132,
    title: 'Canal View Prinsengracht',
    type: 'room',
    raiting: 4
  },
  {
    id: 4,
    img: 'img/apartment-03.jpg',
    isPremium: true,
    price: 180,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    raiting: 5
  },
  {
    id: 5,
    img: 'img/room.jpg',
    isPremium: false,
    price: 80,
    title: 'Wood and stone place',
    type: 'room',
    raiting: 4
  }
];

const settings = {
  cards: cards,
  placesCount: cards.length,
  authProps: {
    authStatus: AuthorizationStatus.NoAuth,
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
