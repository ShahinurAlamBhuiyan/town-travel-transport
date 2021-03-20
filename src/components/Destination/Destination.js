import React, { useState } from 'react';
import Header from '../Header/Header';
import GoogleMap from '../GoogleMap/GoogleMap';
const Destination = () => {
    const [location, setLocation] = useState({ from: null, to: null })
    const onBlurHandler = (e) => {
        const key = e.target.name
        setLocation({ ...location, [key]: e.target.value })
    }

    const handleSubmit =(e) => {
        e.preventDefault()
    }
    return (
        <>
            <Header />
                <div className="container row mt-5">
                    <div className="col-md-5">
                         <form onSubmit={handleSubmit} className="form my-4">
                                <div className="mb-3">
                                    <input name="from" type="text" placeholder="from" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <input name="to" type="text" placeholder="to" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <input type="date" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <input type="time" className="form-control" required />
                                </div>
                                <button  className='btn btn-primary w-100'type="submit"> Search</button>
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