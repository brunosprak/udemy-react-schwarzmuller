import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from './store/auth-context';

ReactDOM.render(
  <AuthContextProvider
    value={{
      isLoggedIn: false,
      onLogout: () => {},
      onLogin: () => {},
    }}
  >
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
