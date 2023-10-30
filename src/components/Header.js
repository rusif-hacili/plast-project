import React from 'react';
import img from "../img/Group (1).png";
import { GoSearch } from "react-icons/go";
import "@fontsource/archivo";
import { Link } from 'react-router-dom';

export default function Header() {
    const onClick = () => {
        
    }
    return (
        <>
            <div className='header'>
                <img src={img} alt="" />
                <ul className="menu">
                    <li><Link to={'/'}>ANA SƏHİFƏ</Link></li>
                    <li><Link to={'/buy'}>ALIRIQ</Link></li>
                    <li><Link to={'/product'}>MƏHSULLARIMIZ</Link></li>
                    <li><Link to={'/devices'}>CİHAZLAR</Link></li>
                    <li><Link to={'/about'}>HAQQIMIZDA</Link></li>
                    <li><Link to={'/connection'}>ƏLAQƏ</Link></li>
                    <div onClick={onClick} className='icon'><Link to={'/search'}><GoSearch className='search'/></Link></div>
                    <div className='translate'>Az</div>
                </ul>
            </div>
        </>
    )
}
