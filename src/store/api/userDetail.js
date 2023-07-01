import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/*******************   
@purpose : Used For calling api using RTK query
@Parameter : {}
@Author : hardik
***************** */
export const userDetail = createApi({
  reducerPath: 'userDetail',
  baseQuery: fetchBaseQuery({ baseUrl: `http://hn.algolia.com/api/v1` }),
  endpoints: (builder) => ({
    getUserDetail: builder.query({
      query: (page) => `/search_by_date?tags=story&page=${page}`,
    }),
  }),
});

export const { useGetUserDetailQuery } = userDetail;