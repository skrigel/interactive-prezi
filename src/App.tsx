import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
// import About from './About';
import Contact from "./components/Presentation";
import { BrowserRouter } from "react-router-dom";
import Presentation from "./components/Presentation";
import React, { StrictMode, createContext } from "react";
import ReactDOM from "react-dom/client";
import NoPage from "./components/NoPage";
// import "./index.css";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="presentation" element={<Presentation />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app")!);
root.render(<App />);
