import {AxiosInstance} from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CommentDataProps, ReviewItemProps} from '../types/types';
import { State } from '../types/state';
import { Offer } from '../types/types';
import { redirectToRoute } from './actions';

import { saveToken, dropToken } from '../services/tokens';
import { APIroute, AppRoute} from '../const';

import { AuthData, UserData } from '../types/types';
import { FavoriteStatus } from '../types/favorite-status';
import { AppDispatch } from '../types/state';


export const fetchOffers = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIroute.Offers);
    return data;
  },
);

export const fetchSpecificOffer = createAsyncThunk<Offer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetch',
  async(id, {extra: api}) => {
    const {data} = await api.get<Offer>(`${APIroute.Offers}/${id}`);
    return data;
  }
);

export const fetchComments = createAsyncThunk<ReviewItemProps[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comments/fetch',
  async(id, {extra: api}) => {
    const {data} = await api.get<ReviewItemProps[]>(`${APIroute.Comments}/${id}`);
    return data;
  }
);

export const fetchNearPlaces = createAsyncThunk<Offer[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'nearPlaces/fetch',
  async(id, {extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIroute.Offers}/${id}/nearby`);
    return data;
  }
);

export const fetchFavoriteOffers = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'DATA/loadFavoriteOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(APIroute.Favorite);
    return data;
  }
);

export const sendComment = createAsyncThunk<ReviewItemProps, CommentDataProps, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comments/send',
  async ({offerId, comment, rating}, {extra: api}) => {
    const { data } = await api.post<ReviewItemProps>(`${APIroute.Comments}/${offerId}`, {comment, rating});
    return data;
  },
);

export const changeFavoriteOfferStatus = createAsyncThunk<Offer, FavoriteStatus, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'DATA/changeFavoriteStatus',
  async ({status, offerId}, {extra: api}) => {
    const { data } = await api.post<Offer>(`${APIroute.Favorite}/${offerId}/${status}`);
    return data;
  },
);


export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const { data } = await api.get<UserData>(APIroute.Login);
    if (data) {
      dispatch(fetchFavoriteOffers());
    }
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const { data } = await api.post<UserData>(APIroute.Login, {email, password});
    saveToken(data.token);
    dispatch(fetchOffers());
    dispatch(redirectToRoute(AppRoute.Root));
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIroute.Logout);
    dispatch(fetchOffers());
    // dispatch(resetFavoriteStatus());
    dropToken();
  },
);
