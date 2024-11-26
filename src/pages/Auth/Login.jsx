import React from "react";
import styles from "./Login.module.css";
import logo from "../../../assets/Art.png";

export default function Login() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.hero}>
                    <div className={styles.leftHero}>h</div>
                    <div className={styles.rightHero}>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className={styles.footer}></div>
            </div>
        </>
    );
}
