import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntroScreen from "./components/IntroScreen";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroScreen />} />
        <Route path="/quiz" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
