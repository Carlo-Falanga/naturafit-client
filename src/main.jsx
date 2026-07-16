import { StrictMode } from "react";
import * as bootstrap from "bootstrap";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <App />
  </StrictMode>,
);
