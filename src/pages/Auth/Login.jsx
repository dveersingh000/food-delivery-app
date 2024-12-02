import React from "react";
import styles from "./Login.module.css";
import logo from "../../assets/images/Art.png";
import orderLogo from "../../assets/images/orderLogo.png";
import AppleLogo from "../../assets/images/Apple.png";
import PlayStoreLogo from "../../assets/images/Playstore.png";
import FacebookLogo from "../../assets/icons/Facebook.png";
import InstagramLogo from "../../assets/icons/Instagram.png";
import TikTokLogo from "../../assets/icons/TikTok.png";
import SnapchatLogo from "../../assets/icons/Snapchat.png";

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
            <div className={styles.footer_1}>
                <div className={styles.footer_1_1}>
                <img src={orderLogo} alt="" />
                <div className={styles.footer_button}>
                    <button><img src={AppleLogo} alt="apple logo" /><p>&nbsp;&nbsp;Download on the<br /><span>App Store</span></p></button>
                    <button><img src={PlayStoreLogo} alt="playstore logo" /><p>GET IT ON<br /><span>&nbsp;&nbsp;&nbsp;Google Play</span></p></button>
                </div>
                <p>Company # 490039-445, Registered with <br /> House of companies.</p>
                </div>
                <div className={styles.footer_container}>
                <div className={styles.footer_section}>
                    <h4>Get Exclusive Deals in your Inbox</h4>
                    <div className={styles.subscription_form}>
                       <input type="email" placeholder="youremail@gmail.com" />
                       <button type="button">Subscribe</button>
                     </div>
                     <p>we won't spam, read our <a href="#">email policy</a></p>
                     <div className={styles.social_icons}>
                      <a href="#"><img src={FacebookLogo} alt="Facebook"/></a>
                      <a href="#"><img src={InstagramLogo} alt="Instagram"/></a>
                      <a href="#"><img src={TikTokLogo} alt="TikTok"/></a>
                      <a href="#"><img src={SnapchatLogo} alt="Snapchat"/></a>
                    </div>
                </div>
                <div className={styles.footer_section}>
                <h4>Legal Pages</h4>
                <ul>
                   <li><a href="#">Terms and conditions</a></li>
                   <li><a href="#">Privacy</a></li>
                   <li><a href="#">Cookies</a></li>
                   <li><a href="#">Modern Slavery Statement</a></li>
                 </ul>
                </div>
                <div className={styles.footer_section}>
                    <h4>Important Links</h4>
                    <ul>
                      <li><a href="#">Get help</a></li>
                      <li><a href="#">Add your restaurant</a></li>
                      <li><a href="#">Sign up to deliver</a></li>
                      <li><a href="#">Create a business account</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className={styles.footer_2}>
                <div>
                    <p>Order.uk Copyright 2024, All Rights Reserved.</p>
                </div>
                <div className={styles.footer_2_2}>
                    <p>Privacy Policy</p>
                    <p>Terms</p>
                    <p>Pricing</p>
                    <p>Do not sell or share my personal information</p>
                </div>
            </div>
        </div>
      </div>
    // </>
  );
}
