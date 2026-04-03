import React, { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await axios.post(
          "https://zerodha-clone-w3y8.onrender.com/auth/auth-check",
          {},
          { withCredentials: true }
        );
        if (data.status && data.user) {
          setUsername(data.user);
          setLoading(false);
        } else {
          window.location.href = "https://stock-trading-platform-dashbord.onrender.com";
        }
      } catch (error) {
        window.location.href = "https://stock-trading-platform-dashbord.onrender.com";
      }
    };
    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <TopBar username={username} />
      <Dashboard username={username} />
    </>
  );
};

export default Home;
