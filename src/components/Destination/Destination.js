import React, { useState } from 'react';
import Header from '../Header/Header';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import GoogleMap from '../GoogleMap/GoogleMap';
const Destination = () => {
    const { destination } = useParams();
    const history = useHistory();
    const [showPackages, setShowPackages] = useState(false)
    const [location, setLocation] = useState({ from: null, to: null })
    const onBlurHandler = (e) => {
        const key = e.target.name
        setLocation({ ...location, [key]: e.target.value })
    }
    return (
        <>
            <Header />
                <div className="container row mt-5">
                    <div className="col-md-5">
                         <form onSubmit={() => setShowPackages(true)} className="form my-4">
                                <div className="mb-3">
                                    <input name="from" onBlur={(e) => onBlurHandler(e)} type="text" placeholder="from" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <input name="to" onBlur={(e) => onBlurHandler(e)} type="text" placeholder="to" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <input type="date" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <input type="time" className="form-control" required />
                                </div>
                                <button className='btn btn-primary w-100' type='submit'> Search</button>
                            </form>
                        <div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <GoogleMap />
                    </div>
                </div>
        </>
    );
};

export default Destination;