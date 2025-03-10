import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Global.css"; // Mantiene los estilos globales
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
