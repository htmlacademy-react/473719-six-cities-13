import { createReducer } from '@reduxjs/toolkit';
import { choseFilter, changeCity, loadOffers, setError, getOffers, setOffersDataLoadingStatus} from './actions';
import { AuthorizationStatus, CITIES } from '../const';
import { requireAuthorisation } from './actions';
import { Card } from '../types';


type InitialState = {
  offers: Card[];
  city: string;
  filter: string;
  authorisationStatus: string;
  error: string | null;
  isOffersDataLoading: boolean;
}

const initialState: InitialState = {
  offers: [],
  city: CITIES.paris,
  filter: 'normal',
  authorisationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, actions) => {
      state.city = actions.payload;
    })
    .addCase(choseFilter, (state, actions) => {
      state.filter = actions.payload;
    })
    .addCase(loadOffers, (state, actions) => {
      state.offers = actions.payload;
    })
    .addCase(requireAuthorisation, (state, actions) => {
      state.authorisationStatus = actions.payload;
    })
    .addCase(setError,(state, actions) => {
      state.error = actions.payload;
    })
    .addCase(getOffers, (state, actions) => {
      state.offers = actions.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, actions) => {
      state.isOffersDataLoading = actions.payload;
    });
});

export {reducer};
