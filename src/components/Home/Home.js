import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import './Home.css'
import fakeData from '../FakeData/FakeData.json'

const Home = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        setCards(fakeData)
    }, [])
    return (
        <div className='home'>
            <div className="pt-5">
                <div className='d-flex justify-content-center flex-wrap'>
                    {
                        cards.map(card => <SingleCard card={card} key={card.id}></SingleCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;