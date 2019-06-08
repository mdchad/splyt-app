import React, {useEffect, useState} from 'react';
import './App.css';
import LeafletMap from './Components/LeafletMap';
import Settings from './Components/Settings';
import {Drivers, Position} from './Interface';
import Slider, { Range } from 'rc-slider';
import Tooltip from 'rc-tooltip';

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
                let newData: { pickup_eta: number, drivers: Drivers[] } = await result.json();
                setData(newData);
                onLoad(false);
            } catch (e) {
                console.error(e)
            }
        };

        fetchData()
}, [count]);

    return (
        <div className='App'>
            { !loading ? <LeafletMap data={data} position={position}/> : <p>Loadingg</p> }
            <Settings count={count} setCount={setCount}/>
        </div>
    );
}

export default App;
