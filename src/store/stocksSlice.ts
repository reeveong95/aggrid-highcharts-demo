import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Stock {
  date: number;
  price: number;
}

interface stockState {
  stocks: Stock[];
  stocksLoading: boolean;
  stocksError: string | null;
}

const initialState: stockState = {
  stocks: [],
  stocksLoading: false,
  stocksError: null,
};

const stocksSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchStocks(state) {
      state.stocksLoading = true;
    },
    fetchStocksSuccess(state, action: PayloadAction<Stock[]>) {
      state.stocks.push(...Object.values(action.payload));
      state.stocksLoading = false;
    },
    fetchStocksFail(state, action) {
      state.stocksError = action.payload.error.message;
      state.stocksLoading = false;
    },
  },
});

export const { fetchStocks, fetchStocksSuccess, fetchStocksFail } =
  stocksSlice.actions;

export default stocksSlice.reducer;
