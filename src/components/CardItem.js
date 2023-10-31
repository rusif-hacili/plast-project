import React from 'react'
import Modal from './Modal'


function CardItem({ image, name, text }) {
    return (
        <>
            <div className='cardItem'>
                <img src={image} alt="" />
                <h1>{name}</h1>
                <p>{text}</p>
                <div className='btn'>
                    <button className='information'>Ətraflı məlumat</button>
                    <button className='appreal'>Müraciət et</button>
                </div>
                <span className='price'>5 azn / 1kg</span>
            
            </div>
        </>
    )
}

export default CardItem
