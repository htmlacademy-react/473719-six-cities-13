import { createAction } from '@reduxjs/toolkit';
import { Cards } from '../types';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction('app/changeCity',
  (city: string) => ({payload: city}));

export const choseFilter = createAction('app/choseFilter',
  (sortType: string) => ({payload: sortType}));

export const loadOffers = createAction<Cards>('data/loadOffers');
export const requireAuthorisation = createAction<AuthorizationStatus>('user/requireAuthorisation');
