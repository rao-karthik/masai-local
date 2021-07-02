import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ReduxContextProvider } from "./Redux/ReduxContextProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ReduxContextProvider>
      <App />
    </ReduxContextProvider>
  </StrictMode>,
  rootElement
);
