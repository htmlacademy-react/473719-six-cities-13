import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, changeCity,} from './actions';
import { CITIES } from '../const';
import mocks from '../mocks';
import { Cards } from '../types';

function getStartPlaces(offers: Cards, city: string) {
  return offers.filter((offer) => offer.city.name === city);
}

const initialState = {
  offers: getStartPlaces(mocks, CITIES.paris),
  city: CITIES.paris,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    // .addCase(loadOffers,
    //   (state, actions) => {
    //     state.offers = actions.payload;
    //   })
    .addCase(changeCity, (state, actions)=> {
      state.city = actions.payload;
      state.offers = getStartPlaces(mocks, state.city);
    });
});

export {reducer};
