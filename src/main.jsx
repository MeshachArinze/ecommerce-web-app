import React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App';
import "./dist/output.css";
import './index.css';
import { AppProvider } from './context';
import "./dist/output.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
