import React, { useEffect } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:3002/auth/auth-check",
          {},
          { withCredentials: true }
        );
        if (!data.status) {
          window.location.href = "http://localhost:3001/login";
        }
      } catch (error) {
        window.location.href = "http://localhost:3001/login";
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
