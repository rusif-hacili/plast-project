import React from 'react';
import img from "../img/Group (1).png";
import { GoSearch } from "react-icons/go";
import "@fontsource/archivo";

export default function Header() {
    return (
        <>
            <div className='main'>
                <img src={img} alt="" />
                <ul className="menu">
                    <li><a href="">ANA SƏHİFƏ</a></li>
                    <li><a href="">ALIRIQ</a></li>
                    <li><a href="">MƏHSULLARIMIZ</a></li>
                    <li><a href="">CİHAZLAR</a></li>
                    <li><a href="">HAQQIMIZDA</a></li>
                    <li><a href="">ƏLAQƏ</a></li>
                    <div className='icon'><GoSearch /></div>
                    <div className='translate'>Az</div>
                </ul>
            </div>
        </>
    )
}
