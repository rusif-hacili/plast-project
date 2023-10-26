import React from 'react'

function PaperItem({ image, name }) {
    return (
        <>
            <div className='paperItem'>
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
