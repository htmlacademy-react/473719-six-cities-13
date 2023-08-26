import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppData } from '../../types/state';
import { NameSpace, Status } from '../../const';
import {
  changeFavoriteOfferStatus,
  fetchComments,
  fetchFavoriteOffers,
  fetchNearPlaces,
  fetchOffers,
  fetchSpecificOffer,
  sendComment } from '../api-actions';
import { toast } from 'react-toastify';

const initialState: AppData = {
  offers: [],
  favoriteOffers: [],
  error: null,
  comments: [],
  isOffersDataLoading: false,
  loadedOffer: null,
  isDetailsLoading: false,
  loadedComments: [],
  nearPlaces: [],
  isNearPlacesLoading: false,
  review: null,
  statusComment: Status.Idle,
  hasError: false,
  isReviewsDataLoading: false,
};


export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    resetFavoriteStatus: (state) => {
      state.favoriteOffers = [];
    },
    setCommentStatus: (state, action: PayloadAction<Status>) => {
      state.statusComment = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchSpecificOffer.pending, (state) => {
        state.isDetailsLoading = true;
      })
      .addCase(fetchSpecificOffer.fulfilled, (state, action) => {
        state.loadedOffer = action.payload;
        state.isDetailsLoading = false;
      })
      .addCase(fetchSpecificOffer.rejected, (state) => {
        state.isDetailsLoading = false;
      })
      .addCase(fetchNearPlaces.pending, (state) => {
        state.isNearPlacesLoading = true;
      })
      .addCase(fetchNearPlaces.fulfilled, (state, action) => {
        state.nearPlaces = action.payload;
        state.isNearPlacesLoading = false;
      })
      .addCase(fetchNearPlaces.rejected, (state) => {
        state.isNearPlacesLoading = false;
      })
      .addCase(fetchComments.pending, (state) => {
        state.isReviewsDataLoading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isReviewsDataLoading = false;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.isReviewsDataLoading = false;
      })
      .addCase(sendComment.pending, (state) => {
        state.statusComment = Status.Loading;
      })
      .addCase(sendComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.statusComment = Status.Success;
      })
      .addCase(sendComment.rejected, (state) => {
        state.statusComment = Status.Error;
        toast.warn('Error sending comment! Try again later');
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(changeFavoriteOfferStatus.fulfilled, (state, action) => {
        const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
        state.offers = [
          ...state.offers.slice(0, index),
          action.payload,
          ...state.offers.slice(index + 1)
        ];

        if (action.payload.isFavorite && !state.favoriteOffers.find((favoriteOffer) => favoriteOffer.id === action.payload.id)) {
          state.favoriteOffers = [...state.favoriteOffers, action.payload];
        } else {
          state.favoriteOffers = state.favoriteOffers.filter((favoriteOffer) => favoriteOffer.id !== action.payload.id);
        }

        if (state.loadedOffer?.id === action.payload.id) {
          state.loadedOffer = {...state.loadedOffer, isFavorite: !state.loadedOffer.isFavorite};
        }

        if (state.nearPlaces.find((nearbyOffer) => nearbyOffer.id === action.payload.id)) {
          const nearbyIndex = state.nearPlaces.findIndex((nearbyOffer) => nearbyOffer.id === action.payload.id);
          state.nearPlaces = [
            ...state.nearPlaces.slice(0, nearbyIndex),
            action.payload,
            ...state.nearPlaces.slice(nearbyIndex + 1)
          ];
        }
      });
  }
});


export const {resetFavoriteStatus, setCommentStatus} = appData.actions;
