import * as Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStocks } from "../store/stocksSlice";
import { RootState } from "../store/store";
import { Spin } from "antd";

const StockChart = (props: HighchartsReact.Props) => {
  const dispatch = useDispatch();
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch]);

  const stocks = useSelector((state: RootState) => state.stocks.stocks);
  const stocksLoading = useSelector(
    (state: RootState) => state.stocks.stocksLoading
  );
  const stocksError = useSelector(
    (state: RootState) => state.stocks.stocksError
  );

  const options = {
    rangeSelector: {
      selected: 1,
    },

    title: {
      text: "AAPL Stock Price",
    },

    series: [
      {
        name: "AAPL",
        data: stocks,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };

  return (
    <div>
      {stocksLoading && !stocksError && <Spin />}
      {stocksError && <h1>Error loading chart...</h1>}
      {!stocksLoading && !stocksError && stocks && (
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={chartComponentRef}
          constructorType={"stockChart"}
          {...props}
        ></HighchartsReact>
      )}
    </div>
  );
};
export default StockChart;
