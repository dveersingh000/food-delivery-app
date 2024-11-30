import React from "react";
import styles from "./Login.module.css";
import logo from "../../assets/images/Art.png";
import orderLogo from "../../assets/images/orderLogo.png";

export default function Login() {
  return (
    // <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.leftHero}>
            <div className={styles.heroText}>
              <div className={styles.section_1}>
                <img src={orderLogo} alt="" />
              </div>
              <div className={styles.section_2}>
                <h2>Welcome Back  👋</h2>
                <p>
                  Today is a new day. It's your day. You shape it.
                  <br />
                  Sign in to start ordering.
                </p>
              </div>
              <div className={styles.section_3}>
                <label className="email">Email</label>
                <input type="text" placeholder="Example@email.com" />
                <label className="password">Password</label>
                <input type="text" placeholder="At least 8 characters" />
                <button>Sign In</button>
              </div>
              <div className={styles.section_4}>
                <p>
                  Don't you have an account? <span>Sign up</span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.rightHero}>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className={styles.footer}>
            <div></div>
            <div></div>
        </div>
      </div>
    // </>
  );
}
