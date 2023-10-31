import React from 'react';
import img from "../img/Group (1).png";
import { GoSearch } from "react-icons/go";
import "@fontsource/archivo";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export default function Header() {

    const { t, i18n } = useTranslation();

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };


    return (
        <>
            <div className='header'>
                <img src={img} alt="" />
                <ul className="menu">
                    <li><Link to={'/'}>{t('navbar.home')}</Link></li>
                    <li><Link to={'/buy'}>{t('navbar.weBuy')}</Link></li>
                    <li><Link to={'/product'}>{t('navbar.ourProducts')}</Link></li>
                    <li><Link to={'/devices'}>{t('navbar.devices')}</Link></li>
                    <li><Link to={'/about'}>{t('navbar.aboutUs')}</Link></li>
                    <li><Link to={'/connection'}>{t('navbar.contact')}</Link></li>
                    <div className='icon'><Link to={'/search'}><GoSearch className='search' /></Link></div>
                    <div className='translate'>
                        <select  defaultValue={i18n.language} onChange={changeLanguage}>
                            <option value="az">Az</option>
                            <option value="en">En</option>
                        </select>
                    </div>
                </ul>
            </div>
        </>
    )
}
