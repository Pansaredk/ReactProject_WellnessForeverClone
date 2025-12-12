import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import "../styles/Login.css";

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/signup", { email, password });

            if (res.data.status === "success") {
                alert("Signup successful! Please login.");
                navigate("/login");
            }
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                console.log(error);
                alert("Something went wrong");
            }
        }
    }

    return (
        <div className="login">
            <h1>Signup</h1>
            <form onSubmit={submit}>
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Signup</button>
            </form>
            <p>OR</p>
            <Link to="/login">Login Page</Link>
        </div>
    );
}

export default Signup;
