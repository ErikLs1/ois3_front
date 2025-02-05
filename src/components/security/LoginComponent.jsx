import React, {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import {login} from "../../services/AuthService.js";

const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        login({email, password})
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("expiresIn", response.data.expiresIn);
                navigate("/persons");
            })
            .catch((err) => {
                setError("Login failed. Please check your credentials.")
            });
    };

    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
                <h3 className="card-title text-center mb-4">Welcome Back!</h3>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="loginEmail" className="form-label">Email address</label>
                        <input
                            type="email"
                            id="loginEmail"
                            className="form-control"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="loginPassword" className="form-label">Password</label>
                        <input
                            type="password"
                            id="loginPassword"
                            className="form-control"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-3">
                        Login
                    </button>
                </form>
                <p className="text-center mb-0">
                    Don't have an account?
                    <Link to="/signup" className="text-decoration-none fw-bold">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginComponent;