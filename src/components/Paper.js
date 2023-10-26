import React from 'react';
import { paperList } from './PaperList';
import PaperItem from './PaperItem';

function Paper() {
    return (
        <>
            <div className='paperList'>
                {paperList.map((paperItem, key) => {
                    return (
                        <PaperItem
                            key={paperItem.key}
                            image={paperItem.image}
                            name={paperItem.name}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Paper
