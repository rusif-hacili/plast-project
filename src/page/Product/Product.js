import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDoubleRight } from "react-icons/bs"
import Paper from '../../components/Paper';
import { useTranslation } from 'react-i18next';

function Product() {

  const { t, i18n } = useTranslation();

  return (
    <>
      <div className='product'>
        <div className='imgMain'>
          <h1 className="title">{t('weProduct.products')}</h1>
          <div className='transition'>
            <Link className='link homeLink' to={'/'}>{t('weProduct.home')}</Link>
            <BsChevronDoubleRight className='icon' />
            <Link className='link buyLink' to={'/product'}>{t('weProduct.productLink')}</Link>
          </div>
        </div>
        <div className='bbb'>
          <Paper />
        </div>
      </div>
    </>
  )
}

export default Product

