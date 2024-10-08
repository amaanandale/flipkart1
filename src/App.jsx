import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Dashboard from "./pages/User/Dashboard";

const App = () => {
  const laptop = "Macbook M3 Air 512gb";
  const chotalaptop = "hp victus";

  const getFruit = (num) => {
    console.log(num);

    if (num === 1) {
      return "Apple";
    } else {
      return "Samsung";
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Signup />} path="/signup"></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Dashboard />} path="/dashboard"></Route>

        <Route element={<Signup />} path="/signup"></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
