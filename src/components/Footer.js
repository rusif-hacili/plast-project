import React from 'react';
import img from ".//../img/XMLID_2603_.png";
import img2 from "./../img/headset 1.png";
import img3 from "./../img/location (3) 1.png";
import line from "./../img/Line 6.png";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoWhatsapp } from "react-icons/bi";

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='mainBox'>
                    <div className='box'>
                        <img src={img} alt="" />
                        <h4>Fəaliyyətimiz</h4>
                        {/* <img src={line} alt="" /> */}
                        <h6>Məhsullarımız</h6>
                        <p>Biz alırıq</p>
                        <p>Cihazlar</p>
                    </div>

                    <div className='box'>
                        <img src={img2} alt="" />
                        <h4>Bizimlə əlaqə</h4>
                        <p>+994 12 222 22 22</p>
                        <p>info@plast.az</p>
                        <div className='socialIcon'>
                            <span><BiLogoFacebook /></span>
                            <span> <AiOutlineInstagram /></span>
                            <span><AiFillYoutube /></span>
                            <span> <BiLogoWhatsapp /></span>
                        </div>
                    </div>

                    <div className='box'>
                        <img src={img3} alt="" />
                        <h4>Bizim Məkan</h4>
                        <p>Bakı şəhəri, Fikrət Əmirov 24, Perron Gallery 2-ci mərtəbə.( 28 may metro stansiyasının yanı)</p>
                    </div>
                </div>

                <div className='line'></div>

                <div className='copyRight'>
                    <div>Copyright © 2021 PLAST. Bütün hüquqlar qorunur.</div>
                    <div className="crocusoftLlc">Developed by <span className='crocusoft'>Crocusoft LLC.</span></div>
                </div>

            </div>
        </>
    )
}

export default Footer
