import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const SingleCard = (props) => {
    const { img, transport  } = props.card
    const history = useHistory();
    const handleClick = () => {
        history.push(`/destination/${transport}`)
    }

    return (
        <div onClick={handleClick} className="card m-2" style={{backgroundColor:'lightGray'}}>
            <img src={img} style={{width:'250px', height:'250px', borderRadius:'50%', margin:'10px'}} alt="/" />
            <div className='p-2'>
                <h5 className="card-title text-center">{transport}</h5>
                <Link to={`/destination/${transport}`} className="btn btn-danger w-100">Buy Ticket</Link>
            </div>
        </div>
    );
};

export default SingleCard;