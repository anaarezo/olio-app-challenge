import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import articlesApi from './articles/apiSlice';
import {articlesSlice} from './articles/slice';
import {visitedSlice} from './visited/slice';
import {persistStore, persistReducer} from 'redux-persist';

const rootReducer = combineReducers({
  article: articlesSlice.reducer,
  [articlesApi.reducerPath]: articlesApi.reducer,
  visited: visitedSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['visited'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(
      articlesApi.middleware,
    ),
});
export let persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = ReturnType<typeof store.dispatch>;
