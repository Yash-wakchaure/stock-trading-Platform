import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");
  const [holdings, setHoldings] = useState([]);
  const [positions, setPositions] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadDashboard = async () => {
      if (!cookies.token) {
        return navigate("/login");
      }

      try {
        const { data } = await axios.get("https://zerodha-clone-w3y8.onrender.com/dashboard", {
          withCredentials: true,
        });

        if (!data || !data.holdings) {
          removeCookie("token", { path: "/" });
          return navigate("/login");
        }

        setUsername(data.user || "User");
        setHoldings(data.holdings || []);
        setPositions(data.positions || []);
        setOrders(data.orders || []);
      } catch (err) {
        removeCookie("token", { path: "/" });
        navigate("/login");
      }
    };
    loadDashboard();
  }, [cookies, navigate, removeCookie]);

  const logout = () => {
    removeCookie("token", { path: "/" });
    navigate("/login");
  };

  return (
    <div className="home_page">
      <h4>
        Welcome <span>{username}</span>
      </h4>
      <button onClick={logout}>LOGOUT</button>

      <section className="dashboard_section">
        <h3>Holdings</h3>
        {holdings.length === 0 ? (
          <p>No holdings found</p>
        ) : (
          <ul>
            {holdings.map((item) => (
              <li key={item._id}>{item.name} — Qty: {item.qty}, Price: {item.price}</li>
            ))}
          </ul>
        )}

        <h3>Positions</h3>
        {positions.length === 0 ? (
          <p>No positions found</p>
        ) : (
          <ul>
            {positions.map((item) => (
              <li key={item._id}>{item.name} — Qty: {item.qty}, Price: {item.price}</li>
            ))}
          </ul>
        )}

        <h3>Orders</h3>
        {orders.length === 0 ? (
          <p>No orders found</p>
        ) : (
          <ul>
            {orders.map((item) => (
              <li key={item._id}>{item.name} — Qty: {item.qty}, Price: {item.price}</li>
            ))}
          </ul>
        )}
      </section>

      <ToastContainer position="top-right" />
    </div>
  );
};

export default Home;