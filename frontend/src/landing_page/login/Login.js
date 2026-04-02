import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodha-clone-w3y8.onrender.com/auth/login",
        form,
        { withCredentials: true }
      );
      if (data.success) {
        toast.success(data.message || "Login successful");
        setTimeout(() => { window.location.href = "https://stock-trading-platform-dashbord.onrender.com"; }, 700);
      } else {
        toast.error(data.message || "Invalid credentials");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Login error");
    }
  };

  return (
    <div className="form_container">
      <h2>Login</h2>
      <form action="/" method="post" onSubmit={submit}>
        <div>
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={onChange} required />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" value={form.password} onChange={onChange} required />
        </div>
        <button type="submit">Login</button>
        <span>
          No account yet? <Link to="/signup">Signup</Link>
        </span>
      </form>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Login;