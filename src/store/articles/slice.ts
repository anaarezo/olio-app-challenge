import {createSlice} from '@reduxjs/toolkit';
import {articlesInitialState} from './initialState';

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: articlesInitialState,
  reducers: {},
});

export default articlesSlice.reducer;
