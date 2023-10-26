import React from 'react';
import { cardList } from './CardList';
import CardItem from './CardItem';

function Card() {
    return (
        <>
            <div className='cardList'>
                {cardList.map((cardItem, key) => {
                    return (
                        <CardItem
                            key={key}
                            image={cardItem.image}
                            name={cardItem.name}
                            text={cardItem.text}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Card;
