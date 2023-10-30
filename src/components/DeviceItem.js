import React from 'react'

function DeviceItem({image, name, text, price}) {
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
                <span className='price'>{price}</span>
            </div>
        </>
    )
}

export default DeviceItem
