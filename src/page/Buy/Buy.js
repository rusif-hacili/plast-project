import React from 'react'
import { Link } from 'react-router-dom';
import { BsChevronDoubleRight } from "react-icons/bs";
import styles from "./Buy.module.css";
import Card from '../../components/Card';
import { useTranslation } from 'react-i18next';

function Buy() {

  const { t, i18n } = useTranslation();

  return (
    <>
      <div className={styles.buyPage}>
        <div className='imgMain'>
          <h1 className="title">{t('weBuy.buy')}</h1>
          <div className='transition'>
            <Link className='link homeLink' to={'/'}>{t('weBuy.home')}</Link>
            <BsChevronDoubleRight className='icon' />
            <Link className='link buyLink' to={'/buy'}>{t('weBuy.buyLink')}</Link>
          </div>
        </div>

        <Card className="card" />
      </div>
    </>
  )
}

export default Buy
