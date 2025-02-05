import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {verify} from "../../services/AuthService.js";

const VerifyAccountComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleVerify = (e) => {
        e.preventDefault();
        verify({email, verificationCode})
            .then((response) => {
                setMessage("Account verified successfully! Please login.")
                setTimeout(() => navigate("/login"), 2000);
            })
            .catch((err) => {
                setError("Verification failed. Please check the code and try again.");
            });
    };

    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
                <h3 className="card-title text-center mb-4">Verify Your Account</h3>
                {error && <div className="alert alert-danger">{error}</div>}
                {message && <div className="alert alert-success">{message}</div>}
                <form onSubmit={handleVerify}>
                    <div className="mb-3">
                        <label htmlFor="verifyEmail" className="form-label">Email</label>
                        <input
                            type="email"
                            id="verifyEmail"
                            className="form-control"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="verificationCode" className="form-label">Verification Code</label>
                        <input
                            type="text"
                            id="verificationCode"
                            className="form-control"
                            placeholder="Enter your verification code"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Verify Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VerifyAccountComponent;