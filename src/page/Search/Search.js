import React from 'react';
import { GoSearch } from "react-icons/go";
import Modal from '../../components/Modal';
import Carousel from '../../components/Carousel';



function Search() {

    return (
        <>
            <div className='searchPage'>
                <div className='imgMain'>
                    <h1 className="title">AXTAR</h1>
                    <div className='transition'>
                        <input type="text" placeholder='Axtar...' />
                        <div className='icon search-icon'><GoSearch /></div>
                    </div>
                </div>
                <Modal />
                <Carousel />
            </div>
        </>
    )
}

export default Search
