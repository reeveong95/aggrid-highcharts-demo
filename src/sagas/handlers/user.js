import { call, put } from "redux-saga/effects";
import { fetchUserSuccess, fetchUserFail } from "../../store/userSlice";
import { requestGetUser } from "../requests/user";

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(fetchUserSuccess({ ...data }));
  } catch (error) {
    yield put(fetchUserFail({ error }));
  }
}
