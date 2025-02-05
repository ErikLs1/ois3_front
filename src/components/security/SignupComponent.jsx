import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {signup} from "../../services/AuthService.js";
const SignupComponent = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        signup({username, email, password})
            .then((response) => {
                setMessage("Signup successful! Check your email for verification code.");
                navigate("/verify", {state: {email}});
            })
            .catch((err) => {
                setMessage("Signup failed. Please try again.");
            });
    };

    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
                <h3 className="card-title text-center mb-4">Create Your Account</h3>
                {message && <div className={`alert ${message.includes("successful") ? "alert-success" : "alert-danger"}`}>{message}</div>}
                <form onSubmit={handleSignup}>
                    <div className="mb-3">
                        <label htmlFor="signupUsername" className="form-label">Username</label>
                        <input
                            type="text"
                            id="signupUsername"
                            className="form-control"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="signupEmail" className="form-label">Email address</label>
                        <input
                            type="email"
                            id="signupEmail"
                            className="form-control"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group mb-2">
                        <label htmlFor="signupPassword" className="form-label">Password</label>
                        <input
                            type="password"
                            id="signupPassword"
                            className="form-control"
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100"> Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignupComponent;