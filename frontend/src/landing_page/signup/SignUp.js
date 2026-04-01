import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
    });

    const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const submit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:3002/auth/signup",
                form,
                { withCredentials: true }
            );
            if (data.success) {
                toast.success(data.message || "Sign up successful");
                setTimeout(() => { window.location.href = "http://localhost:3000/"; }, 700);
            } else {
                toast.error(data.message || "Sign up failed");
            }
        } catch (err) {
            toast.error(err.response?.data?.message || "Sign up error");
        }
    };

    return (
        <div className="form_container">
            <h2>Sign Up</h2>
            <form onSubmit={submit}>
                <div>
                    <label>Email</label>
                    <input name="email" type="email" value={form.email} onChange={onChange} required />
                </div>
                <div>
                    <label>Username</label>
                    <input name="username" type="text" value={form.username} onChange={onChange} required />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" value={form.password} onChange={onChange} required />
                </div>
                <button type="submit">Sign Up</button>
                <span>
                    Already have an account? <Link to="/login">Login</Link>
                </span>
            </form>
            <ToastContainer position="bottom-right" />
        </div>
    );
};

export default SignUp;