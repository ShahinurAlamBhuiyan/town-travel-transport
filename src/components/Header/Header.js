import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <div className='header'>
            <div>
                <Link to='/home'>
                    <h2>Town Travel Transport</h2>
                </Link>
            </div>
            <div className='link'>
                <Link to="/home">Home</Link>
                <Link to="/destination">Destination</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">
                    <Button>Login</Button>
                </Link>
            </div>
        </div>
    );
};

export default Header;