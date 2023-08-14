import { createAction } from '@reduxjs/toolkit';
import { Cards } from '../types';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction('app/changeCity',
  (city: string) => ({payload: city}));

export const choseFilter = createAction('app/choseFilter',
  (sortType: string) => ({payload: sortType}));

export const getOffers = createAction('data/getOffers',
  (offers: Cards) => ({payload: offers}));

export const getComments = createAction('data/getComments',
  (comments: any | null) => ({payload: comments}));

export const requireAuthorisation = createAction<AuthorizationStatus>('user/requireAuthorisation');
export const setError = createAction<string | null>('app/setError');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const loadOffers = createAction<Cards>('loading/loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

