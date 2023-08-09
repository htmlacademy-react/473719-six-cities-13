import { createReducer } from '@reduxjs/toolkit';
import { choseFilter, changeCity,} from './actions';
import { CITIES } from '../const';
import mocks from '../mocks';


const initialState = {
  offers: mocks,
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
    });
});

export {reducer};
