import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { fetchUser } from "./store/userSlice";
import "./App.css";
import AgGrid from "./components/AgGrid";
import PieChart from "./components/PieChart";
import StockChart from "./components/StockChart";
import { Spin } from "antd";
import BarChart from "./components/Chart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const user = useSelector((state: RootState) => state.user.user);
  const userLoading = useSelector((state: RootState) => state.user.userLoading);
  const userError = useSelector((state: RootState) => state.user.userError);

  let userContent = <Spin />;

  if (userError) {
    userContent = <h1>Error</h1>;
  }

  if (!userLoading && !userError && user) {
    userContent = <h1>Hello {user.firstName}</h1>;
  }

  return (
    <div className="container">
      <header>{userContent}</header>
      <main className="main-container">
        <AgGrid />
        <PieChart />
        <StockChart />
        <BarChart />
      </main>
    </div>
  );
}

export default App;
