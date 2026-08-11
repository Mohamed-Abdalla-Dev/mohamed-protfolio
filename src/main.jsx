import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const loader = document.getElementById("app-loader");
const rootElement = document.getElementById("root");

const hideLoader = () => {
  if (!loader) return;
  loader.classList.add("is-hidden");
  window.setTimeout(() => loader.remove(), 350);
};

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

hideLoader();
