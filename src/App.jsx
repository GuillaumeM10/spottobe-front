import { useState } from "react";
import "./App.css";
import Router from "./components/Router";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="main relative">
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
