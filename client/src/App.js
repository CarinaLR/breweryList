import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout/Layout";
import "./App.css";
import "./main.scss";

export default function App() {
  return (
    <Router>
      <div>
        <Layout />
      </div>
    </Router>
  );
}
