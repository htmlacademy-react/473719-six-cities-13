import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('app/changeCity',
  (city: string) => ({payload: city}));
export const loadOffers = createAction('app/loadOffers',
  (offers: Cards) => ({payload: offers}));
