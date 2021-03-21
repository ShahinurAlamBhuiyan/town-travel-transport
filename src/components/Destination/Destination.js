import React from 'react';
import DestinationForm from '../DestinationForm/DestinationForm';
import GoogleMap from '../GoogleMap/GoogleMap';

const Destination = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-wrap">
            <div className="container row mt-5">
                <div className="col-md-5" style={{backgroundColor:'#336B87', borderRadius:'10px'}}>
                    <DestinationForm />
                </div>
                <div className="col-md-7">
                    <GoogleMap />
                </div>
            </div>
        </div>
    );
};

export default Destination;