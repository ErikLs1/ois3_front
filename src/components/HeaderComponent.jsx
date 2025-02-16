import React from "react";
import {Link, useNavigate} from "react-router-dom";

const HeaderComponent = () => {
   const navigate = useNavigate();
   const token = localStorage.getItem("token");

   const handleLogout = () => {
       localStorage.removeItem("token")
       navigate("/login");
   }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to={token ? "/persons" : "/login"}>
                    MyApp
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {token ? (
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {/* Protected */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/persons">
                                    Persons
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">
                                    My Profile
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button onClick={handleLogout} className="btn nav-link btn-link text-white">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {/* Public */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default HeaderComponent