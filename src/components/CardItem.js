import React, { useState } from 'react'
import Modal from './Modal'
import { useTranslation } from 'react-i18next';


function CardItem({ image, name, text }) {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className='cardItem col-md-6'>
                <img src={image} alt="" />
                <h1>{name}</h1>
                <p>{text}</p>
                <div className='btn'>
                    <button className='information'>{t('title.details')}</button>
                    {/* <Modal /> */}
                    <button className='appreal'>{t('title.apply')}</button>
                  
                </div>
                <span className='price'>5 azn / 1kg</span>
            </div>
        </>
    )
}

export default CardItem
