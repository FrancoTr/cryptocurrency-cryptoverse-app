import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Link to="/">
              <Homepage />
            </Link>
            <Link to="/exchanges">
              <Exchanges />
            </Link>
            <Link to="/cryptocurrencies">
              <Cryptocurrencies />
            </Link>
            <Link to="/crypto/:coinId">
              <CryptoDetails />
            </Link>
            <Link to="/news">
              <News />
            </Link>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
