import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";
import { handleGetCars } from "./handlers/cars";
import { handleGetStocks } from "./handlers/stocks";
import { fetchUser } from "../store/userSlice";
import { fetchCars } from "../store/carsSlice";
import { fetchStocks } from "../store/stocksSlice";

export function* watcherSaga() {
  yield takeLatest(fetchUser.type, handleGetUser);
  yield takeLatest(fetchCars.type, handleGetCars);
  yield takeLatest(fetchStocks.type, handleGetStocks);
}
