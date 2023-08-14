import { createReducer } from '@reduxjs/toolkit';
import { choseFilter, changeCity, loadOffers, setError, getOffers, setOffersDataLoadingStatus, loadSpecificOffer, dropOffer, loadComments, loadNearPlaces} from './actions';
import { AuthorizationStatus, CITIES } from '../const';
import { requireAuthorisation } from './actions';
import { Card, NearPlacesProps, Offer, ReviewItemProps } from '../types';


type InitialState = {
  offers: Card[];
  city: string;
  filter: string;
  authorisationStatus: string;
  error: string | null;
  isOffersDataLoading: boolean;
  loadedOffer: Offer | null;
  loadedComments: ReviewItemProps[] | undefined;
  nearPlaces: NearPlacesProps[] | undefined;
}

const initialState: InitialState = {
  offers: [],
  city: CITIES.paris,
  filter: 'normal',
  authorisationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
  loadedOffer: null,
  loadedComments: [],
  nearPlaces: [],
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
    })
    .addCase(loadSpecificOffer, (state, actions) => {
      state.loadedOffer = actions.payload;
    })
    .addCase(dropOffer, (state) => {
      state.loadedOffer = null;
    })
    .addCase(loadComments, (state, actions) => {
      state.loadedComments = actions.payload;
    })
    .addCase(loadNearPlaces, (state, actions) => {
      state.nearPlaces = actions.payload;
    });
});

export {reducer};
