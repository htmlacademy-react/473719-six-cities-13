import axios, {AxiosInstance} from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types';
import { Cards } from '../types';
import { loadOffers, requireAuthorisation, } from './actions';

import { saveToken, dropToken } from '../services/tokens';
import { APIroute, AuthorizationStatus} from '../const';


export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async(_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Cards>(APIroute.Offers);
    dispatch(loadOffers(data));
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
    const {data: {token}} = await api.post(APIroute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorisation(AuthorizationStatus.Auth));
  },
);
