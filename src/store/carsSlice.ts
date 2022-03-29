import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Car {
  make: string;
  model: string;
  price: number | null;
}

interface carState {
  cars: Car[];
  carsLoading: boolean;
  carsError: string | null;
}

const initialState: carState = {
  cars: [],
  carsLoading: false,
  carsError: null,
};

const carsSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchCars(state) {
      state.carsLoading = true;
    },
    fetchCarsSuccess(state, action: PayloadAction<Car[]>) {
      state.cars.push(...Object.values(action.payload));
      state.carsLoading = false;
    },
    fetchCarsFail(state, action) {
      state.carsError = action.payload.error.message;
      state.carsLoading = false;
    },
  },
});

export const { fetchCars, fetchCarsSuccess, fetchCarsFail } = carsSlice.actions;

export default carsSlice.reducer;
