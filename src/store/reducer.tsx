import { createReducer } from '@reduxjs/toolkit';
import { choseFilter, changeCity, loadOffers,} from './actions';
import { CITIES } from '../const';
import mockOffers from '../mock-offers';


const initialState = {
  offers: mockOffers,
  city: CITIES.paris,
  filter: 'normal',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, actions) => {
      state.city = actions.payload;
    })
    .addCase(choseFilter, (state, actions) => {
      state.filter = actions.payload;
    })
    .addCase(loadOffers, (state) => {
      state.offers = mockOffers;
    });
});

export {reducer};
