import React, { useState } from "react";
import styles from "./Login.module.css";
import logo from "../../assets/images/Art.png";
import orderLogo from "../../assets/images/orderLogo.png";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { login } from "../../apis/auth";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )
      newErrors.email = "Enter a valid email address.";
    if (!formData.password.trim() || formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters long.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await login(formData.email, formData.password);
      alert("Login successful!");
      navigate("/dashboard"); // Navigate to the dashboard or homepage
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoSignup = () => {
    navigate("/signup");
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.leftHero}>
          <div className={styles.heroText}>
            <div className={styles.section_1}>
              <img src={orderLogo} alt="Order Logo" />
            </div>
            <div className={styles.section_2}>
              <h2>Welcome Back 👋</h2>
              <p>
                Today is a new day. It's your day. You shape it.
                <br />
                Sign in to start ordering.
              </p>
            </div>
            <div className={styles.section_3}>
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Example@email.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}

              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="At least 8 characters"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className={styles.error}>{errors.password}</p>}

              <button onClick={handleLogin} disabled={loading}>
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </div>
            <div className={styles.section_4}>
              <p>
                Don't you have an account?{" "}
                <span onClick={handleGoSignup} className={styles.signupLink}>
                  Sign up
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.rightHero}>
          <img src={logo} alt="Hero Logo" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
