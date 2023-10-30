import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
function PaperItem({ image, name }) {

    const location = useLocation();
    const [color, setColor] = useState('transparent');


    useEffect(() => {
        if (location.pathname === '/') {
            setColor('#fff'); // Home page background color
        } else {
            setColor('#090C06'); // Other pages background color
        }
    }, [location]);

    return (
        <>
            <div className='paperItem' style={{color}}>
                <img src={image} alt="" />
                <h5>{name}</h5>
                <p>Interdum at a, vestibulum porta tristique penatibus feugiat tristique.</p>
                <div className="mainBox">
                    <button>Müraciət et</button>
                    <div>5 azn / 1kg</div>
                </div>
            </div>
        </>
    )
}

export default PaperItem
