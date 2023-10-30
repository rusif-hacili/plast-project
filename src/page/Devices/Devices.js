import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDoubleRight } from "react-icons/bs";
import Device from '../../components/Device'

function Devices() {
  return (
    <>
      <div className='devices'>
        <div className='imgMain'>
          <h1 className="title">CİHAZLAR</h1>
          <div className='transition'>
            <Link className='link homeLink' to={'/'}>Ana səhifə</Link>
            <BsChevronDoubleRight className='icon' />
            <Link className='link buyLink' to={'/devices'}>Cihazlar</Link>
          </div>
        </div>
        <Device />
      </div>
    </>
  )
}

export default Devices
