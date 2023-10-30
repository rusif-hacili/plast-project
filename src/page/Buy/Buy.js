import React from 'react'
import { Link } from 'react-router-dom';
import { BsChevronDoubleRight } from "react-icons/bs";
import styles from "./Buy.module.css";
import Card from '../../components/Card';

function Buy() {
  return (
    <>
      <div className={styles.buyPage}>
        <div className='imgMain'>
          <h1 className="title">BİZ ALIRIQ</h1>
          <div className='transition'>
            <Link className='link homeLink' to={'/'}>Ana səhifə</Link>
            <BsChevronDoubleRight className='icon' />
            <Link className='link buyLink' to={'/buy'}>Alırıq</Link>
          </div>
        </div>

        <Card className="card" />
      </div>
    </>
  )
}

export default Buy
