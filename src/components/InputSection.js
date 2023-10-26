import React from 'react';
import img from "../img/Polygon 1 (1).png";

function InputSection() {
  return (
    <>
      <div className='inputSection'>
        <img src={img} alt="" />
        <div>
          <input type="text" placeholder='Rusif Hacılı' />
          <input type="number" placeholder='Mobil nömrə' />
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder='Mesajınız'></textarea>
        <div><button>Göndər</button></div>
      </div>
    </>
  )
}

export default InputSection
