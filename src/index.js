import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./app/index.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./app/App";

const root = document.getElementById("root");
const rootRender = createRoot(root);

rootRender.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
