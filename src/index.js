import React from "react";
import ReactDOM from "react-dom/client";
import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Info />
    <About />
    <Interests />
    <Footer />
  </React.StrictMode>
);

// reportWebVitals();
