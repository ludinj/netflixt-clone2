import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { SavedMoviesContextProvider } from "./context/SavedMoviesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AuthContextProvider>
    <SavedMoviesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SavedMoviesContextProvider>
  </AuthContextProvider>

  // </React.StrictMode>
);
