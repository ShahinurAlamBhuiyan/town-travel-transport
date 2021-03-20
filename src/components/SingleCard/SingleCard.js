import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './SingleCard.css'

const SingleCard = (props) => {
    const { img, transport  } = props.card
    const history = useHistory();
    const handleClick = () => {
        history.push(`/destination/${transport}`)
    }
    return (
        <div onClick={handleClick} className="card m-3" style={{backgroundColor:'gray'}}>
            <img src={img} style={{width:'250px', height:'250px', borderRadius:'50%', margin:'10px'}} alt="/" />
            <div style={{padding:'20px'}}>
                <h5 className="card-title">{transport}</h5>
                <Link to={`/destination/${transport}`} className="btn btn-primary">Buy Ticket</Link>
            </div>
        </div>
    );
};

export default SingleCard;