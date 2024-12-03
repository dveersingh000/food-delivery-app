import React, { useState } from "react";
import styles from "./Signup.module.css";
import logo from "../../assets/images/Art.png";
import orderLogo from "../../assets/images/orderLogo.png";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { signup } from "../../apis/auth";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number.";
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

  const handleSignup = async () => {
    if (!validate()) return;

    try {
      const response = await signup(formData);
      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please try again.");
    }
  };

  const handleGoLogin = () => {
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.leftHero}>
          <div className={styles.heroText}>
            <div className={styles.section_1}>
              <img src={orderLogo} alt="" />
            </div>
            <div className={styles.section_2}>
              <h2>Welcome 👋</h2>
              <p>
                Today is a new day. It's your day. You shape it.
                <br />
                Sign up to start ordering.
              </p>
            </div>
            <div className={styles.section_3}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="e.g., John A"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}

              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your 10-digit phone number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className={styles.error}>{errors.phone}</p>}

              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="example@email.com"
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

              <button onClick={handleSignup}>Continue</button>
            </div>
            <div className={styles.section_4}>
              <p>
                Already have an account?{" "}
                <span onClick={handleGoLogin} className={styles.loginLink}>
                  Sign in
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.rightHero}>
          <img src={logo} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
