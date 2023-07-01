import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userDetail } from './api/userDetail';

/*******************   
@purpose : Used For configure a store
@Parameter : {}
@Author : hardik
***************** */
export const store = configureStore({
  reducer: {
    [userDetail.reducerPath]: userDetail.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userDetail.middleware),
});

setupListeners(store.dispatch);