import { Outlet } from "react-router";
import { Provider } from "react-redux";
import appStore from "../stores/appStore";

const Body = () => {
  return (
    <Provider store={appStore}>
      <Outlet />
    </Provider>
  );
};

export default Body;
