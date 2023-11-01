import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDoubleRight } from "react-icons/bs";
import Device from '../../components/Device';
import { useTranslation } from 'react-i18next';

function Devices() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className='devices'>
        <div className='imgMain'>
          <h1 className="title">{t('weDevices.devices')}</h1>
          <div className='transition'>
            <Link className='link homeLink' to={'/'}>{t('weDevices.home')}</Link>
            <BsChevronDoubleRight className='icon' />
            <Link className='link buyLink' to={'/devices'}>{t('weDevices.devicesLink')}</Link>
          </div>
        </div>
        <Device />
      </div>
    </>
  )
}

export default Devices
