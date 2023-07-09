import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';

const mocks = [
  {
    id: 1,
    isPremium: true,
    isFavorite: false,
    imgUrl: 'img/apartment-01.jpg',
    price: 120,
    tarification: 'night',
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'appartement',
    averageStars: 4,
  },
  {
    id:2,
    isPremium: false,
    isFavorite: true,
    imgUrl: 'img/room.jpg',
    price: 80,
    tarification: 'night',
    title: 'Wood and stone placen',
    type: 'private room',
    averageStars: 4,
  },
  {
    id:3,
    isPremium: false,
    isFavorite: false,
    imgUrl: 'img/apartment-02.jpg',
    price: 132,
    tarification: 'night',
    title: 'Canal View Prinsengracht',
    type: 'appartement',
    averageStars: 4,
  },
  {
    id:4,
    isPremium: true,
    isFavorite: false,
    imgUrl: 'img/apartment-03.jpg',
    price: 180,
    tarification: 'night',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'appartement',
    averageStars: 5,
  },
  {
    id:5,
    isPremium: false,
    isFavorite: true,
    imgUrl: 'img/room.jpg',
    price: 80,
    tarification: 'night',
    title: 'Wood and stone place',
    type: 'private room',
    averageStars: 4,
  },
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App appData = { mocks }/>
  </React.StrictMode>
);
