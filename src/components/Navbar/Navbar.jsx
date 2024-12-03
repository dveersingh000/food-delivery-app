import React from 'react';
import styles from './Navbar.module.css';
import OrderLogo from '../../assets/images/orderLogo.png';
import UserLogo from '../../assets/icons/User.png';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span><img src={OrderLogo} alt="" /></span>
      </div>
      <ul className={styles.navLinks}>
        <li className={`${styles.navItem} ${styles.active}`}>Home</li>
        <li className={styles.navItem}>Browse Menu</li>
        <li className={styles.navItem}>Special Offers</li>
        <li className={styles.navItem}>Restaurants</li>
        <li className={styles.navItem}>Track Order</li>
        <li className={styles.navItem} onClick={handleLogin}><span ><img src={UserLogo} alt="" /></span>Login/Signup</li>
      </ul>
      {/* <div className={styles.authButtons}>
        
      </div> */}
    </nav>
  )
}
