import { call, put } from "redux-saga/effects";
import { requestGetCars } from "../requests/cars";
import { fetchCarsFail, fetchCarsSuccess } from "../../store/carsSlice";

export function* handleGetCars(action) {
  try {
    const response = yield call(requestGetCars);
    const { data } = response;
    yield put(fetchCarsSuccess({ ...data }));
  } catch (error) {
    yield put(fetchCarsFail({ error }));
  }
}
