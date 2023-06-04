import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { fetchTopPlaces } from './catalogAPI';
import { Place } from '@/types/catalog';


type CatalogState = {
  places: Place[],
  topPlaces: Place[],
}

const initialState: CatalogState = {
  places: [],
  topPlaces: [],
};

export const fetchTopPlacesWithThunk = createAsyncThunk(
  'catalog/fetchTopPlaces',
  async () => {
    const response = await fetchTopPlaces();
    return response;
  }
);


export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setPlaces(state: CatalogState, action: PayloadAction<Place[]>) {
      state.places = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopPlacesWithThunk.fulfilled, (state: CatalogState, action: PayloadAction<Place[] | undefined>) => {
        if (action.payload) {
          state.topPlaces = [...action.payload];
        }
      })
  },
});

export const { setPlaces } = catalogSlice.actions;
export const selectPlaces = (state: RootState) => state.catalog.places;
export const selectTopPlaces = (state: RootState) => state.catalog.topPlaces;
export default catalogSlice.reducer;