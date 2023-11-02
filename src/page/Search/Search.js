import React, { useState } from 'react';
import { GoSearch } from "react-icons/go";
import Modal from '../../components/Modal';
import Carousel from '../../components/Carousel';
import { useTranslation } from 'react-i18next';
import Paper from '../../components/Paper';
import { paperList } from '../../components/PaperList';
import PaperItem from '../../components/PaperItem';


function Search() {

    const { t, i18n } = useTranslation();

    const [headingText, setHeadingText] = useState('');
    const [filteredPaperList, setFilteredPaperList] = useState(paperList);

    const handleKeyUp = (event) => {
        const result = paperList.filter(item => item.name.includes(event.target.value));
        const text = event.target.value == '' ? '' : event.target.value + ' açar sözü üzrə axtarış nəticələri...'
        setHeadingText(text);
        setFilteredPaperList(result);
    }

    return (

        <>
            <div className='searchPage'>
                <div className='imgMain'>
                    <h1 className="title">{t('searchUs.search')}</h1>
                    <div className='transition'>
                        <input type="text" placeholder='Axtar...' onKeyUp={handleKeyUp} />
                        <div className='icon search-icon'><GoSearch /></div>
                    </div>
                </div>
                <h1 className='headingText'>{headingText}</h1>
                <div className='paperList'>
                    {filteredPaperList.map((paperItem, key) => {
                        return (
                            <PaperItem
                                key={paperItem.key}
                                image={paperItem.image}
                                name={paperItem.name}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Search
