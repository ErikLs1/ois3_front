import React, { useState, useEffect } from "react";
import {getProfile, createProfile, updateProfile} from "../services/PersonService.js";
import {useNavigate} from "react-router-dom";


const ProfileComponent = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [editMode, setEditMode] = useState(false);

    const [formData, setFormData] = useState({
        uniId: "",
        firstName: "",
        lastName: "",
        gender: "",
        phoneNumber: "",
        address: "",
        dateOfBirth: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        getProfile()
            .then((response) => {
                if (response.data) {
                    setProfile(response.data);
                    setFormData({
                        uniId: response.data.uniId || "",
                        firstName: response.data.firstName || "",
                        lastName: response.data.lastName || "",
                        gender: response.data.gender || "",
                        phoneNumber: response.data.phoneNumber || "",
                        address: response.data.address || "",
                        dateOfBirth: response.data.dateOfBirth || ""
                    });
                }
            })
            .catch((error) => {
                console.error("Error fetching profile:", error);
            })
            .finally(() => setLoading(false));
    }, []);

    // Handle form changes.
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (profile) {
            updateProfile(formData)
                .then((response) => {
                    setProfile(response.data);
                    setEditMode(false);
                })
                .catch((err) => console.error("Update failed:", err));
        } else {
            createProfile(formData)
                .then((response) => {
                    setProfile(response.data);
                    setEditMode(false);
                })
                .catch((err) => console.error("Creation failed:", err));
        }
    };

    if (loading) {
        return (
            <div className="container mt-5">
                <p>Loading profile...</p>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">My Profile</h2>
            {profile && !editMode ? (
                <div className="card shadow p-4">
                    <p><strong>University ID:</strong> {profile.uniId}</p>
                    <p><strong>First Name:</strong> {profile.firstName}</p>
                    <p><strong>Last Name:</strong> {profile.lastName}</p>
                    <p><strong>Gender:</strong> {profile.gender}</p>
                    <p><strong>Phone Number:</strong> {profile.phoneNumber}</p>
                    <p><strong>Address:</strong> {profile.address}</p>
                    <p><strong>Date of Birth:</strong> {profile.dateOfBirth}</p>
                    <button className="btn btn-primary" onClick={() => setEditMode(true)}>
                        Edit Profile
                    </button>
                </div>
            ) : (
                <div className="card shadow p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="uniId" className="form-label">University ID</label>
                            <input
                                type="text"
                                id="uniId"
                                name="uniId"
                                className="form-control"
                                value={formData.uniId}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="form-control"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="form-control"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label">Gender</label>
                            <select
                                id="gender"
                                name="gender"
                                className="form-control"
                                value={formData.gender}
                                onChange={handleInputChange}
                                required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="form-control"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="form-control"
                                value={formData.address}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                            <input
                                type="date"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                className="form-control"
                                value={formData.dateOfBirth}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <button type="submit" className="btn btn-success">
                            Save
                        </button>
                        {profile && (
                            <button
                                type="button"
                                className="btn btn-secondary ms-3"
                                onClick={() => {
                                    setFormData({
                                        uniId: profile.uniId || "",
                                        firstName: profile.firstName || "",
                                        lastName: profile.lastName || "",
                                        gender: profile.gender || "",
                                        phoneNumber: profile.phoneNumber || "",
                                        address: profile.address || "",
                                        dateOfBirth: profile.dateOfBirth || ""
                                    });
                                    setEditMode(false);
                                }}>
                                Cancel
                            </button>
                        )}
                    </form>
                </div>
            )}
        </div>
    );
};

export default ProfileComponent;