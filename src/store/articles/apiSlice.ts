import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IProduct} from './interface';
const productListUrl =
  'https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json';

const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({baseUrl: productListUrl}),
  endpoints: builder => ({
    getArticles: builder.query<IProduct[], void>({
      query: () => ``,
    }),
  }),
});

export default articlesApi;
