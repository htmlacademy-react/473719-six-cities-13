import { createAction } from '@reduxjs/toolkit';
import { Cards, CommentData, NearPlacesProps, Offer, ReviewItemProps } from '../types';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types';
import { AppRoute } from '../const';

export const changeCity = createAction('app/changeCity',
  (city: string) => ({payload: city}));

export const choseFilter = createAction('app/choseFilter',
  (sortType: string) => ({payload: sortType}));

export const getOffers = createAction('data/getOffers',
  (offers: Cards) => ({payload: offers}));

export const loadOffers = createAction<Cards>('loading/loadOffers');


export const loadSpecificOffer = createAction<Offer>('data/loadSpecificOffer');
export const getSpecificOffer = createAction<Offer>('offer/fetch',
  (offer: Offer) => ({payload: offer}));

export const loadComments = createAction('data/loadComments');
export const getComments = createAction('comments/fetch',
  (comments: ReviewItemProps[]| null) => ({payload: comments}));


export const loadNearPlaces = createAction('data/loadNearPlaces');
export const getNearPlaces = createAction('nearPlaces/fetch',
  (nearPlaces: NearPlacesProps | null) => ({payload: nearPlaces}));

export const setError = createAction<string | null>('app/setError');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const dropOffer = createAction('data/drop');

export const setUserInfo = createAction('user/setUserInfo', (userInfo: UserData | null) => ({payload: userInfo}));
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const setComment = createAction<CommentData>('comments/post', (review: CommentData | null) => ({payload: review}));
