import { useEffect, useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { useDispatch, useSelector } from "react-redux";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { RootState } from "../store/store";
import { fetchCars } from "../store/carsSlice";

import { Button } from "antd";
import { Spin } from "antd";
import "../App.css";

const AgGrid = () => {
  const gridRef = useRef<any>(null);
  const dispatch = useDispatch();

  const [columnDefs] = useState([
    { field: "make", sortable: true, filter: true, checkboxSelection: true },
    { field: "model", sortable: true, filter: true },
    { field: "price", sortable: true, filter: true },
  ]);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const cars = useSelector((state: RootState) => state.cars.cars);
  const carsLoading = useSelector((state: RootState) => state.cars.carsLoading);
  const carsError = useSelector((state: RootState) => state.cars.carsError);

  let gridContent = <Spin />;

  if (carsError) {
    gridContent = <h1>Error loading grid...</h1>;
  }

  if (!carsLoading && !carsError && cars) {
    gridContent = (
      <div
        className="ag-theme-alpine ag-grid"
        style={{ height: 400, width: 600 }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={cars}
          columnDefs={columnDefs}
          rowSelection="multiple"
        />
      </div>
    );
  }

  const onButtonClick = () => {
    const selectedNodes = gridRef.current?.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node: any) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node: any) => node.make + " " + node.model)
      .join(", ");
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  };

  return (
    <div>
      {!carsLoading && !carsError && cars && (
        <Button
          type="primary"
          onClick={onButtonClick}
          className="selected-rows-btn"
        >
          Get selected rows
        </Button>
      )}
      {gridContent}
    </div>
  );
};
export default AgGrid;
