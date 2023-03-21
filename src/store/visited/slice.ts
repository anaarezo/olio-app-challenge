import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {visitedInitialState} from './initialState';

export const visitedSlice = createSlice({
  name: 'visited',
  initialState: visitedInitialState,
  reducers: {
    addVisited(state, action: PayloadAction<number>) {
      const productId = action.payload;
      return state.articlesVisited.includes(productId)
        ? state
        : {
            ...state,
            articlesVisited: [...state.articlesVisited, productId],
          };
    },
  },
});

export const {addVisited} = visitedSlice.actions;
export default visitedSlice.reducer;
