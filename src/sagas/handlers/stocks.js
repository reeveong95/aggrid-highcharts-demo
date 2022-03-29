import { call, put } from "redux-saga/effects";
import { requestGetStocks } from "../requests/stocks";
import { fetchStocksFail, fetchStocksSuccess } from "../../store/stocksSlice";

export function* handleGetStocks(action) {
  try {
    const response = yield call(requestGetStocks);
    const { data } = response;
    yield put(fetchStocksSuccess({ ...data }));
  } catch (error) {
    yield put(fetchStocksFail({ error }));
  }
}
