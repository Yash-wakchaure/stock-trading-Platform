import React, { useEffect } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await axios.post(
          "https://zerodha-clone-w3y8.onrender.com/auth/auth-check",
          {},
          { withCredentials: true }
        );
        if (!data.status) {
          window.location.href = "https://stock-trading-platform-frontend-u69r.onrender.com/login";
        }
      } catch (error) {
        window.location.href = "https://stock-trading-platform-frontend-u69r.onrender.com/login";
      }
    };
    checkAuth();
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
