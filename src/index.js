import React from "react";
import App from "../src/App";
import ReactDOM from 'react-dom/client';
import { BrowserRouter  } from "react-router-dom";
import './Mink Demo/Mink Demo Bold/Mink Demo Bold.ttf';
import './css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
      
  

  </React.StrictMode>
);