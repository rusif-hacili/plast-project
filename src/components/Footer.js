import React from 'react';
import img from ".//../img/XMLID_2603_.png";
import img2 from "./../img/headset 1.png";
import img3 from "./../img/location (3) 1.png";
import line from "./../img/Line 6.png";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoWhatsapp } from "react-icons/bi";
import { useState } from 'react';
import { useEffect } from 'react';
// import { withRouter } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {

    const location = useLocation();
    const [background, setBackground] = useState('transparent');
    const [color, setColor] = useState('transparent');


    useEffect(() => {
        if (location.pathname === '/') {
            setBackground('#090C06') || setColor('#fff'); // Home page background color
        } else {
            setBackground('#F8F8F7') || setColor('#090C06'); // Other pages background color
        }
    }, [location]);

    const { t, i18n } = useTranslation();


    return (
        <>
            <div className='footer' style={{ background, color }}>
                <div className='mainBox'>
                    <div className='box'>
                        <img src={img} alt="" />
                        <h4>{t('footerPage.ourActivity')}</h4>
                        {/* <img src={line} alt="" /> */}
                        <h6><Link style={{ color }} className='productName' to={'/product'}>{t('footerPage.ourProducts')}</Link></h6>
                        <p><Link style={{ color }} className='buyName' to={'/buy'}>{t('footerPage.weBuy')}</Link></p>
                        <p><Link style={{ color }} className='devicesName' to={'/devices'}>{t('footerPage.devices')}</Link></p>
                    </div>

                    <div className='box'>
                        <img src={img2} alt="" />
                        <h4>{t('footerPage.contactUs')}</h4>
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
                        <h4>{t('footerPage.ourLoction')}</h4>
                        <p>{t('footerPage.location')}</p>
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
