import { call, put, SagaReturnType } from "redux-saga/effects";
import { requestGetStocks } from "../requests/stocks";
import { fetchStocksFail, fetchStocksSuccess } from "../../store/stocksSlice";

type response = SagaReturnType<typeof requestGetStocks>;

export function* handleGetStocks() {
  try {
    const response: response = yield call(requestGetStocks);
    const { data } = response;
    yield put(fetchStocksSuccess({ ...data }));
  } catch (error) {
    yield put(fetchStocksFail({ error }));
  }
}
