import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDoubleRight } from "react-icons/bs";
import InputSection from '../../components/InputSection';
import { useTranslation } from 'react-i18next';

function Connection() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className='connectionPage'>
                <div className='imgMain'>
                    <h1 className="title">{t('contactUs.contact')}</h1>
                    <div className='transition'>
                        <Link className='link homeLink' to={'/'}>{t('contactUs.home')}</Link>
                        <BsChevronDoubleRight className='icon' />
                        <Link className='link buyLink' to={'/connection'}>{t('contactUs.contactLink')}</Link>
                    </div>
                </div>
                <div className="distance">
                    <InputSection />
                </div>
            </div>
        </>
    )
}

export default Connection
