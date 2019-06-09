import React, {useEffect, useState} from 'react';
import './App.css';
import LeafletMap from './Components/LeafletMap';
import Settings from './Components/Settings';
import LoadingOverlay from 'react-loading-overlay';
import {Drivers, Position } from './interface';

const App: React.FC = () => {
    const [data, setData] = useState<{pickup_eta: number, drivers: Drivers[]}>({ pickup_eta: 0, drivers: [] });
    const [loading, onLoad] = useState<boolean>(false);
    const [count, setCount] = useState<number>(1);
    const [position, setPosition] = useState<Position>({ lat: 51.5049375, lng: -0.0964509 });
    const proxyUrl: string = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl: string = `https://qa-interview-test.qa.splytech.io/api/drivers?latitude=${position.lat}&longitude=${position.lng}&count=${count}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                onLoad(true);
                const result: Response = await fetch(proxyUrl + targetUrl);
                const fetchedData: { pickup_eta: number, drivers: Drivers[] } = await result.json();
                setData(fetchedData);
                onLoad(false);
            } catch (e) {
                console.error(e)
            }
        };

        fetchData()
}, [count, targetUrl]);

    return (
        <div className='App'>
            <LoadingOverlay active={loading}
                            spinner
                            text={'Fetching drivers'}>
                <LeafletMap data={data} position={position}/>
            </LoadingOverlay>
            <Settings count={count} setCount={setCount}/>
        </div>
    );
};

export default App;
