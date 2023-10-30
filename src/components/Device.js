import React from 'react';
import { deviceList } from './DeviceList';
import DeviceItem from './DeviceItem';

function Device() {
    return (
        <>
            <div className='cardList'>
                {deviceList.map((deviceItem, key) => {
                    return (
                        <DeviceItem
                            key={deviceItem.key}
                            image={deviceItem.image}
                            name={deviceItem.name}
                            text={deviceItem.text}
                            price={deviceItem.price}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Device
