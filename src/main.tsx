import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles.scss";
import { Provider } from "react-redux";
import { store } from "./redux";

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
