import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';

const UserProfile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser.displayName, loggedInUser.email)

    const history = useHistory();
    const handleClick = () =>{
        history.push('/home')
    }

    return (
        <div className="pt-5 d-flex justify-content-center align-items-center flex-column">
                <img className='mw-50' src={loggedInUser.photoURL} style={{ borderRadius: '50%' }} alt="/" />
                <h5 className="card-title ">Name : <strong>{loggedInUser.displayName}</strong> </h5>
                <h5 className="card-title ">Email : <strong>{loggedInUser.email}</strong> </h5>
                <Button variant='danger' onClick={handleClick}>Back to home</Button>
        </div>
    );
};

export default UserProfile;