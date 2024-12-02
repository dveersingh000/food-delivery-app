import React from 'react'
import styles from './HomePage.module.css'
import DownloadLogo from '../../assets/icons/Download.png';
import LocationLogo from '../../assets/icons/Location.png';
import CartIconLogo from '../../assets/icons/CartIcon.png';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.section_1}> 
        <div  className={styles.section_1_1}>
            <p >🌟 Get 5% Off your first order, <span>Promo: ORDER5</span></p>
            <p ><img src={LocationLogo} alt="" />Regent Street, A4, A4201, London&nbsp;&nbsp; <span> Change Location</span></p>
        </div>        
        <div className={styles.section_1_2}>
            <button><img src={CartIconLogo} alt="" />My Cart<img src={DownloadLogo} alt="" /></button>
        </div>
      </div>
      <nav className={styles.section_2}>Navbar</nav>
      <div className={styles.section_3}></div>
      <div className={styles.section_4}></div>
      <div className={styles.section_5}></div>
      <div className={styles.section_6}></div>
      <div className={styles.section_7}></div>
      <div className={styles.section_8}></div>
      <div className={styles.section_9}></div>
      <div className={styles.section_10}></div>
      <div className={styles.section_11}></div>
    </div>
  )
}
