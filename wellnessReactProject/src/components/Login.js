import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import "../styles/Login.css";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/login", { email, password });

            if (res.data.status === "exist") {
                navigate("/", { state: { id: email } });
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
            <h1>Login</h1>
            <form onSubmit={submit}>
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit" className="btn">Login</button>
            </form>
            <p>OR</p>
            <Link to="/signup" className="sign">Signup Page</Link>
        </div>
    );
}

export default Login;
