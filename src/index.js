import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import store from "./Store/store";
import { Suspense } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../src/Store/store";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={"loading"}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
