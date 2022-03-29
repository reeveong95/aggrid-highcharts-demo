import { call, put, SagaReturnType } from "redux-saga/effects";
import { fetchUserSuccess, fetchUserFail } from "../../store/userSlice";
import { requestGetUser } from "../requests/user";

type response = SagaReturnType<typeof requestGetUser>;

export function* handleGetUser() {
  try {
    const response: response = yield call(requestGetUser);
    const { data } = response;
    yield put(fetchUserSuccess({ ...data }));
  } catch (error) {
    yield put(fetchUserFail({ error }));
  }
}
