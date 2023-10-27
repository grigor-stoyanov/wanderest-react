// Libs
import { Provider as StateProvider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// Local
import router from "./router";
// CSS
import "./index.css";
import store from "./db/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StateProvider store={store}>
        <RouterProvider router={router} />
    </StateProvider>
  </React.StrictMode>
);
