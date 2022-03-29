import { call, put, SagaReturnType } from "redux-saga/effects";
import { requestGetCars } from "../requests/cars";
import { fetchCarsFail, fetchCarsSuccess } from "../../store/carsSlice";

type response = SagaReturnType<typeof requestGetCars>;

export function* handleGetCars() {
  try {
    const response: response = yield call(requestGetCars);
    const { data } = response;
    yield put(fetchCarsSuccess({ ...data }));
  } catch (error) {
    yield put(fetchCarsFail({ error }));
  }
}
