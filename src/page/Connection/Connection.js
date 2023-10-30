import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDoubleRight } from "react-icons/bs";
import InputSection from '../../components/InputSection';

function Connection() {
    return (
        <>
            <div className='connectionPage'>
                <div className='imgMain'>
                    <h1 className="title">BİZİMLƏ ƏLAQƏ</h1>
                    <div className='transition'>
                        <Link className='link homeLink' to={'/'}>Ana səhifə</Link>
                        <BsChevronDoubleRight className='icon' />
                        <Link className='link buyLink' to={'/connection'}>Əlaqə</Link>
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
