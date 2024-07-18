import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Home from "./routes/home/home";
import "./main.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> 
            </Routes>
        </Router>
    </Provider>
  </React.StrictMode>,
);
