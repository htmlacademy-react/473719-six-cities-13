import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppProcess } from '../../types/state';
import { CITIES, NameSpace } from '../../const';

const initialState: AppProcess = {
  city: CITIES.paris,
  sort: 'normal',
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    changeSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    }
  },
});

export const { changeCity, changeSort } = appProcess.actions;
