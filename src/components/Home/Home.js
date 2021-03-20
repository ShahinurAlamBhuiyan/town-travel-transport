import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
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
            <Header />
            <div className='pt-5 mt-5  d-flex justify-content-center flex-wrap'>
                {
                    cards.map(card => <SingleCard card={card}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default Home;