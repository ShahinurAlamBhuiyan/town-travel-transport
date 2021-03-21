import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BikeData from '../FakeData/TransportData/BikeData.json'
import BusData from '../FakeData/TransportData/BusData.json'
import TrainData from '../FakeData/TransportData/TrainData.json'
import CarData from '../FakeData/TransportData/CarData.json'
import ChoseTransport from './ChoseTransport';
import DestinationPath from '../DestinationPath/DestinationPath';




const DestinationDone = (props) => {
    const from = props?.from?.area;
    const to = props?.to?.area;

    const { transport } = useParams();
    const [bikes, setBikes] = useState()
    const [cars, setCars] = useState()
    const [buses, setBuses] = useState()
    const [trains, setTrains] = useState()

    useEffect(() => {
        setBikes(BikeData)
        setCars(CarData)
        setBuses(BusData)
        setTrains(TrainData)
    }, [])

    return (
        <div style={{ backgroundColor: '#336B87', padding: '15px', borderRadius: '9px' }}>
            <div  style={{ backgroundColor: '#90AFC5', color: 'white', borderRadius: '7px', textTransform: 'upperCase',fontWeight:'700' }}>
                
            <DestinationPath from={from} to={to}></DestinationPath>
            
            </div>
            <div>
                {transport === 'BIKE' &&
                    bikes?.map(bike => <ChoseTransport name={bike}></ChoseTransport>)
                }
                {transport === 'CAR' &&
                    cars?.map(car => <ChoseTransport name={car}></ChoseTransport>)
                }
                {transport === 'TRAIN' &&
                    trains?.map(train => <ChoseTransport name={train}></ChoseTransport>)
                }
                {transport === 'BUS' &&
                    buses?.map(bus => <ChoseTransport name={bus}></ChoseTransport>)
                }
            </div>
        </div>
    );
};

export default DestinationDone;