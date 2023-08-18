import {AxiosInstance} from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, CommentData, State } from '../types';
import { Cards, Offer } from '../types';
import { loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus, loadSpecificOffer, loadComments, loadNearPlaces} from './actions';
import { store } from '.';
import { setUserInfo } from './actions';
import { redirectToRoute, setComment } from './actions';


import { saveToken, dropToken } from '../services/tokens';
import { APIroute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';

import { AuthData, UserData } from '../types';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  ()=> {
    setTimeout(
      ()=> store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  }
);

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/getOffers',
  async(_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Cards>(APIroute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);

export const fetchSpecificOffer = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetch',
  async(id, {dispatch, extra: api}) => {
    try {
      dispatch(setOffersDataLoadingStatus(true));
      const {data} = await api.get<Offer>(`${APIroute.Offers}/${id}`);
      dispatch(setOffersDataLoadingStatus(false));
      dispatch(loadSpecificOffer(data));
    } catch {
      dispatch(setOffersDataLoadingStatus(true));
      dispatch(setOffersDataLoadingStatus(false));
    }
  }
);

export const fetchComments = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comments/fetch',
  async(id, {dispatch, extra: api}) => {
    try {
      dispatch(setOffersDataLoadingStatus(true));
      const {data} = await api.get<Offer>(`${APIroute.Comments}/${id}`);
      dispatch(setOffersDataLoadingStatus(false));
      dispatch(loadComments(data));
    } catch {
      dispatch(setOffersDataLoadingStatus(true));
      dispatch(redirectToRoute(AppRoute.Root));
      dispatch(setOffersDataLoadingStatus(false));
    }
  }
);

export const fetchNearPlaces = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'nearPlaces/fetch',
  async(id, {dispatch, extra: api}) => {
    try {
      dispatch(setOffersDataLoadingStatus(true));
      const {data} = await api.get<Offer>(`${APIroute.Offers}/${id}/nearby`);
      dispatch(setOffersDataLoadingStatus(false));
      dispatch(loadNearPlaces(data));
    } catch {
      dispatch(setOffersDataLoadingStatus(true));
      dispatch(redirectToRoute(AppRoute.Root));
      dispatch(setOffersDataLoadingStatus(false));
    }
  }
);

export const sendComments = createAsyncThunk<void, CommentData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comments/send',
  async ({offerId, comment, rating}, {dispatch, extra: api}) => {
    const { data } = await api.post<CommentData>(`${APIroute.Comments}/${offerId}`, {comment, rating});
    dispatch(setComment(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<UserData>(APIroute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Root));
      dispatch(setUserInfo(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const { data } = await api.post<UserData>(APIroute.Login, {email, password});
    saveToken(data.token);
    dispatch(setUserInfo(data));
    dispatch(redirectToRoute(AppRoute.Root));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIroute.Logout);
    dropToken();
    dispatch(setUserInfo(null));
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
