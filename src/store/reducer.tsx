import { createReducer } from '@reduxjs/toolkit';
import { choseFilter, changeCity, loadOffers,} from './actions';
import { AuthorizationStatus, CITIES } from '../const';
import { requireAuthorisation } from './actions';


const initialState = {
  offers: [],
  city: CITIES.paris,
  filter: 'normal',
  authorisationStatus: AuthorizationStatus.Unknown,
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
      state.offers = actions.payload;
    })
    .addCase(requireAuthorisation, (state) => {
      state.authorisationStatus = actions.payload;
    });
});

export {reducer};
