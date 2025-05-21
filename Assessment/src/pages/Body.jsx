import { Outlet } from "react-router";
import { Provider } from "react-redux";
import appStore from "../stores/appStore";
import Navbar from "./Navbar";

const Body = () => {
  return (
    <Provider store={appStore}>
      <Navbar />
      <Outlet />
    </Provider>
  );
};

export default Body;
