import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Greeting from "./components/Greeting";
import Home from "./pages/Home";
import useAuthStore from "./store";
import "./App.css"

const App = () => {
  const token = useAuthStore((state) => state.token);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={token ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/signup" element={token ? <Navigate to="/"/> : <SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
