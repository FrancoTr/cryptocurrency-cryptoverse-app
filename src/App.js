import React from "react";
import { Link } from "react-router-dom";
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

        <div className="footer">
          <Typography.Title level={5} style={{ color: "white", textAlign: "center" }}>
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
