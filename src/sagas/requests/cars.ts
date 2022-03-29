import axios from "axios";

export const requestGetCars = () => {
  return axios.request({
    method: "get",
    url: "https://www.ag-grid.com/example-assets/small-row-data.json",
  });
};
