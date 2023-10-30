import React from 'react';
import styles from './Home.style.module.css';
import Header from '../../components/Header';
import { BiChevronsDown } from "react-icons/bi";
import Card from '../../components/Card';
import img from "../../img/Polygon 1.png"
import Paper from '../../components/Paper';
import img2 from "..//../img/Group 7.png";
import img3 from "../../img/Polygon 1 (1).png";
import img4 from "..//..//img/Rectangle 420.png";
import InputSection from '../../components/InputSection';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import { Link } from 'react-router-dom';



function Home() {

  const onClick = () => {
    console.log('aaa')
  }

  return (
    <>
      <div className={styles.homePage}>
        <div className={styles.main}>
          {/* <Header /> */}
          <div className={styles.title}>
            <p>Daha gözəl gələcək üçün</p>
            <h1>Təbiətə atmayaq!</h1>
            <Modal />
            {/* <button onClick={onClick}>Müraciət et</button> */}
            <div className={styles.iconBi}><BiChevronsDown /></div>
          </div>
        </div>

        <div className={styles.weGet}><span>BİZ <span className={styles.get}>ALIRIQ</span> <span> !</span></span></div>
        <img className={styles.img} src={img} alt="" />
        <Card />
        <div className={styles.box}><span className={styles.ourProduct}>BİZİM <span className={styles.product}>MƏHSULLARIMIZ</span><span>.</span></span></div>

        <section className={styles.paperNapkin}>
          <img className={styles.img3} src={img3} alt="" />
          <Paper />
          <img className={styles.direction} src={img2} alt="" />
          <div className={styles.weGet}><span>HAQQIMIZDA<span className={styles.get}>MƏLUMAT</span> <span>.</span></span></div>
        </section>
        <img className={styles.img} src={img} alt="" />

        <section className={styles.sectionFour}>
          <div className={styles.boxTo}>
            <img src={img4} alt="" />
            <div className={styles.boxThree}>
              <h3>Biz kimik <span>?</span></h3>
              <p>Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra. Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra.


                Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra.
                <p>Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra. Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra.</p> </p>
            </div>
          </div>
          <div className={styles.boxFour}>
            <p>Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra. </p>
            <h5>- Anton Çexov</h5>
          </div>

        </section>
        <div className={styles.connection}><span className={styles.ourProduct}>BİZİMLƏ <span className={styles.product}>ƏLAQƏ</span><span>.</span></span></div>
        <InputSection />
        {/* <Footer /> */}
      </div>

    </>
  )
}

export default Home
