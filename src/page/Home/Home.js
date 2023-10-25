import React from 'react';
import styles from './Home.style.module.css';
import Header from '../../components/Header';
import { BiChevronsDown } from "react-icons/bi";



function Home() {
  return (
    <>
      <div>
        <div className={styles.main}>
          <Header />
          <div className={styles.title}>
            <p>Daha gözəl gələcək üçün</p>
            <h1>Təbiətə atmayaq!</h1>
            <button>Müraciət et</button>
            <div className={styles.iconBi}><BiChevronsDown /></div>
          </div>
        </div>

        <div className={styles.weGet}><span>BİZ <span className={styles.get}>ALIRIQ</span> <span> !</span></span></div>

      </div>

    </>
  )
}

export default Home
