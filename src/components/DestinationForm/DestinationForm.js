import React, { useState } from 'react';
import DestinationDone from '../DestinationDone/DestinationDone';

const DestinationForm = () => {
    const [from, setFrom] = useState({})
    const [to, setTo] = useState({})
    const [destination, setDestination] = useState({})


    const handleBlur = (e) => {
        if (e.target.name === 'from') {
            const newFrom = {
                area: e.target.value
            }
            setFrom(newFrom)
        }
        if (e.target.name === 'to') {
            const newFrom = {
                area: e.target.value
            }
            setTo(newFrom)
        }
        else {
            const filled = {
                fillUP: false
            }
            setDestination(filled)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSearch()
    }

    const handleSearch = () => {
        const filled = { fillUp: true }
        setDestination(filled);
    }

    return (
        <div>
            { destination.fillUp ?
                <DestinationDone from={from} to={to}></DestinationDone>
                :
                <form onSubmit={handleSubmit} className="form my-4">
                    <div className="mb-3">
                        <input onBlur={handleBlur} name="from" type="text" placeholder="from" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <input onBlur={handleBlur} name="to" type="text" placeholder="to" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <input type="date" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <input type="time" className="form-control" required />
                    </div>
                    <input className='btn btn-danger w-100' type="submit" value='Search' />
                </form>

            }
        </div>
    );
};

export default DestinationForm;