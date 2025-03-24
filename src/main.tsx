import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./large/App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="hidden xl:flex">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  </StrictMode>
);
