import React from 'react'
import styles from './HomePage.module.css'
import DownloadLogo from '../../assets/icons/Download.png';
import LocationLogo from '../../assets/icons/Location.png';
import CartIconLogo from '../../assets/icons/CartIcon.png';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Home_1 from '../../assets/images/Home_1.png';
import Home_2 from '../../assets/images/Home_2.png';
import Home_3 from '../../assets/images/Home_3.png';
import Home_4 from '../../assets/images/Home_4.png';
import Home_5 from '../../assets/images/Home_5.png';
import Home_6 from '../../assets/images/Home_6.png';
import Home_7 from '../../assets/images/Home_7.png';
import Home_8 from '../../assets/images/Home_8.png';




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
      <nav className={styles.section_2}><Navbar /></nav>
      <div className={styles.section_3}></div>
      <div className={styles.section_4}>
        <div className={styles.section_4_1}>
          <div className={styles.section_4_1_1}>
            <h2>Up to -40% 🎊 Order.uk exclusive deals</h2>
          </div>
          <div className={styles.section_4_1_2}>
            <ul>
              <li>Vegan</li>
              <li>others</li>
              <li>Sushi</li>
              <li>Pizza & Fast food</li>
            </ul>
          </div>
        </div>
        <div className={styles.section_4_2}>
          <img src={Home_1} alt="" />
          <img src={Home_2} alt="" />
          <img src={Home_3} alt="" />
        </div>
      </div>
      <div className={styles.section_5}>
        <img src={Home_4} alt="" />
      </div>
      <div className={styles.section_6}>
        <img src={Home_5} alt="" />
      </div>
      <div className={styles.section_7}>
        <img src={Home_6} alt="" />
      </div>
      <div className={styles.section_8}>
        <img src={Home_7} alt="" />
        <img src={Home_8} alt="" />
      </div>
      <div className={styles.section_9}></div>
      <div className={styles.section_10}></div>
      {/* <div className={styles.section_11}></div> */}
      <Footer />
    </div>
  )
}
