import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'
import logo from '../../images/logo.jpg'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className='header'>
            <div>
                <Link to='/home' className='d-flex justify-content-between align-items-center flex-wrap'>
                <img style={{width:'90px', borderRadius:'50%'}} src={logo} alt=""/>
                <h2> Town Travel Transport</h2>
                </Link>
            </div>
            <div className='link'>
                <Link to="/home">Home</Link>
                <Link to="/destination/CAR">Destination</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">
                    {
                        loggedInUser.email ? 
                        <p style={{color:'red'}}><strong>{loggedInUser.displayName}</strong></p> : 
                        <Button>Log in</Button>
                    }
                </Link>
            </div>
        </div>
    );
};

export default Header;