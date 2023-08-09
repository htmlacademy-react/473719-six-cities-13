import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, changeCity,} from './actions';
import { CITIES } from '../const';
import mocks from '../mocks';
import { Cards } from '../types';


const initialState = {
  offers: mocks,
  city: CITIES.paris,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, actions)=> {
      state.city = actions.payload;
    });
});

export {reducer};
