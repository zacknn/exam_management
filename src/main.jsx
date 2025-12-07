import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { makeServer } from "./fake/server";

// Start MirageJS fake API in development
if (import.meta.env && import.meta.env.DEV) {
  makeServer();
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
