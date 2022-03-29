import axios from "axios";

export const requestGetStocks = () => {
  return axios.request({
    method: "get",
    url: "https://demo-live-data.highcharts.com/aapl-c.json",
  });
};
