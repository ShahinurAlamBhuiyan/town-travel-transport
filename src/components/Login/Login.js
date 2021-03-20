import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFrameWork, signInWithEmailAndPassword } from './LoginManager';
import fbIcon from '../../images/FacebookIcon.png'
import googleIcon from '../../images/googleIcon.png'


function Login() {
    const [newUser, setNewUser] = useState(false)

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    });

    initializeLoginFrameWork();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleRes(res, true)
            })
    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleRes(res, true)
            })
    }

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleRes(res, false)
            })
    }

    const handleRes = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }

    }

    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === 'email') {
            isFieldValid = /^[^\s@]+@[^\s@]+$/.test(event.target.value)
        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value)
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo)
        }
    }


    const handleSubmit = (event) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleRes(res, true)
                })
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleRes(res, true)
                })
        }
        event.preventDefault();
    }

    const inputStyle = {
        border: "none",
        borderBottom: "2px solid red",
        marginTop: '4px'
    }

    return (
        <>
            <Header />

            <div className='m-auto pt-3' >
                <div style={{ border: '1px solid red', width: '400px', height: '500px', textAlign: 'center', margin: 'auto', marginBottom: '20px' }}>
                    {
                        newUser ?
                            <h3 style={{ paddingTop: '50px' }}>Create an account</h3>
                            : <h3 style={{ paddingTop: '50px' }}>Login</h3>
                    }
                    <div>
                        <form onSubmit={handleSubmit}>
                            {
                                newUser && <input style={inputStyle} name='name' placeholder='Your name' onBlur={handleBlur} type="text" required />
                            }<br />
                            <input style={inputStyle} type="text" onBlur={handleBlur} name='email' placeholder='Email' required /> <br />
                            <input style={inputStyle} type="password" onBlur={handleBlur} name="password" placeholder="Password" required />
                            <br />
                            <br />
                            <input type="submit" style={{ width: '180px' }} className='btn btn-danger' value={newUser ? 'create an account' : 'Login'} />
                        </form>
                    </div>
                    <div style={{ paddingTop: '10px' }}>
                        {
                            newUser ? <p> <small>Already has account?<a style={{ cursor: 'pointer', color: 'red' }} onClick={() => setNewUser(!newUser)}> Login</a></small></p> :

                                <p> <small>Don't have an account?<a style={{ cursor: 'pointer', color: 'red' }} onClick={() => setNewUser(!newUser)}> create an account</a></small></p>
                        }
                    </div>
                </div>
                
                <p> <strong>or</strong> </p>


                <div className='container d-flex justify-content-between align-items-center flex-wrap'>
                    <div className='d-flex justify-content-between align-items-center' style={{ border: '1px solid black', padding: '5px 15px', marginTop: '20px', width: '400px', borderRadius: '40px' }} onClick={fbSignIn}>
                        <img style={{ width: '50px' }} src={fbIcon} alt="" />
                        <p> <strong>Sign in with facebook</strong> </p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center' style={{ border: '1px solid black', padding: '5px 15px', marginTop: '20px', width: '400px', borderRadius: '40px' }} onClick={googleSignIn}>
                        <img style={{ width: '50px' }} src={googleIcon} alt="" />
                        <p> <strong>Sign in with google</strong> </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
