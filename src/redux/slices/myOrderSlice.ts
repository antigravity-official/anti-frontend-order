// import axios from 'axios'
// import { fetchMyOrder } from '../apis/Order';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../types/myOrder/Order';

export interface MyOrderState {
  orderInfo: Order | null;
  loading: boolean;
  error: string | null;
}

const initialState: MyOrderState = {
  orderInfo: null,
  loading: false,
  error: null,
};

const myOrderSlice = createSlice({
  name: 'myOrder',
  initialState,
  reducers: {
    fetchMyOrderStart(state: MyOrderState) {
      state.loading = true;
      state.error = null;
    },
    fetchMyOrderSuccess(state: MyOrderState, action: PayloadAction<Order>) {
      state.orderInfo = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchMyOrderFailure(state: MyOrderState, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchMyOrder.pending, (state: MyOrderState) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(fetchMyOrder.fulfilled, (state: MyOrderState, action: PayloadAction<Order>) => {
  //       state.orderInfo = action.payload;
  //       state.loading = false;
  //       state.error = null;
  //     })
  //     .addCase(fetchMyOrder.rejected, (state: MyOrderState, action: PayloadAction<SerializedError>) => {
  //       state.loading = false;
  //       state.error = action.error.message;
  //     });
  // },
});

export const { fetchMyOrderStart, fetchMyOrderSuccess, fetchMyOrderFailure } = myOrderSlice.actions;

export const myOrderReducer = myOrderSlice.reducer;
