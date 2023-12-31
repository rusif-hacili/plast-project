import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import img from "../img/Polygon 1 (1).png";

var array = [];

function InputSection() {

  const location = useLocation();
  const [background, setBackground] = useState('transparent');
  const [color, setColor] = useState('transparent');
  const [border, setBorder] = useState('transparent');


  useEffect(() => {
    if (location.pathname === '/') {
      setBackground('#090C06') || setBorder('1px solid #fff') || setColor('#fff'); // Home page background color
    } else {
      setBackground('#fff') || setBorder('1px solid #AEAEAE') || setColor('black'); // Other pages background color
    }
  }, [location]);

  const [inputName, setInputName] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [text, setText] = useState('');
  const handleInputNameChange = (event) => {
    setInputName(event.target.value);
    event.target.value = ''
  };

  const handleInputNumberChange = (event) => {
    setInputNumber(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);

  };


  const initialState = {
    inputName,
    inputNumber,
    text
  }

  const saveToLocalStorage = () => {
    array.push(initialState)
    localStorage.setItem('contact', JSON.stringify(array));
    setInputName('');
    setInputNumber('');
    setText('')
  };


  return (

    <>
      <div className='inputSection' style={{ background, color }}>
        <img src={img} alt="" />
        <form>
          <input className='name' type="text" placeholder='Rusif Hacılı' style={{ background, border }}
            value={inputName}
            onChange={handleInputNameChange}
          />
          <input className='number' type="number" placeholder='Mobil nömrə' style={{ background, border }}
            value={inputNumber}
            onChange={handleInputNumberChange}
          />
        </form>
        <textarea name="" id="" cols="30" rows="10" placeholder='Mesajınız' style={{ background, border }}
          value={text}
          onChange={handleTextChange}
        ></textarea>
        <div><button onClick={saveToLocalStorage}>Göndər</button></div>
      </div>
    </>
  )
}

export default InputSection
