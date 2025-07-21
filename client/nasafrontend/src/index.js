import App from "./App";
import "bulma/css/bulma.css";
import "./css/style.css";

import React from "react";
import ReactDom from "react-dom/client";

const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

root.render(
  <div>
    <App />
  </div>
);
