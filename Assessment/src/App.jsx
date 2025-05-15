import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import Body from "./pages/Body";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route
            path="/"
            element={<Body className="flex flex-col min-h-screen" />}
          >
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
