import axios, {AxiosInstance} from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types';
import { Cards, Offer } from '../types';
import { loadOffers, requireAuthorisation, setError, setOffersDataLoadingStatus, loadSpecificOffer, loadComments} from './actions';
import { store } from '.';

import { saveToken, dropToken } from '../services/tokens';
import { APIroute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';

type UserData = {
  id: number;
  email: string;
  token: string;
}

type AuthData = {
  login: string;
  password: string;
}

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
      //redirect to route
      dispatch(setOffersDataLoadingStatus(false));
    }
  }
);

export const fetchComments = createAsyncThunk<void, any, {
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
      //redirect to route
      dispatch(setOffersDataLoadingStatus(false));
    }
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuthAction',
  async(_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIroute.Login);
      dispatch(requireAuthorisation(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorisation(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIroute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorisation(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async(_arg, {dispatch, extra: api}) => {
    await api.delete(APIroute.Logout);
    dropToken();
    dispatch(requireAuthorisation(AuthorizationStatus.NoAuth));
  },
);
