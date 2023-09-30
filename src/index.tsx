import React from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import "styles/reset.css";
import App from "components/app/app";
import { ContextProvider } from "context";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  // <React.StrictMode>
  <ContextProvider>
    <App />
  </ContextProvider>
  // </React.StrictMode>
);
