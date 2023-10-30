import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDoubleRight } from "react-icons/bs"
import Paper from '../../components/Paper';

function Product() {
  return (
    <>
      <div className='product'>
        <div className='imgMain'>
          <h1 className="title">MƏHSULLARIMIZ</h1>
          <div className='transition'>
            <Link className='link homeLink' to={'/'}>Ana səhifə</Link>
            <BsChevronDoubleRight className='icon' />
            <Link className='link buyLink' to={'/product'}>Məhsullarımız</Link>
          </div>
        </div>
        <Paper />
        <Paper />
      </div>
    </>
  )
}

export default Product

