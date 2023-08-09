import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('app/changeCity',
  (city: string) => ({payload: city}));

export const choseFilter = createAction('app/choseFilter',
  (sortType: string) => ({payload: sortType}));
