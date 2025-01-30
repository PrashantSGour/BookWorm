import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignIn.css';
const SignInPage = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState(""); // State to handle error messages
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(""); // Reset error message before new request

        try {
            const response = await fetch("http://localhost:8080/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && data.status === "success") {
                alert("Login Successful!");
                navigate("/dashboard"); // Redirect to dashboard or another page
            } else {
                setError(data.message || "Invalid credentials, please try again.");
            }
        } catch (error) {
            setError("An error occurred. Please check your connection.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Login</h2>
                {error && <p className="error-message">{error}</p>} {/* Display error message */}
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;
