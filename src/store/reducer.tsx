import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, changeCity, choseParis, choseCologne} from './actions';
import { Cards, City } from '../types';
import { AllCities } from '../const';
import mocks from '../mocks';

const initialState = {
  choseCity: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  offers: mocks,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers,
      (state, actions) => {
        state.offers = actions.payload;
      })
    .addCase(changeCity, (state, actions)=> {
      state.choseCity = actions.payload;
    });
});

export {reducer};
