import React, {useEffect, useState} from 'react';
import './App.css';
import LeafletMap from "./Components/LeafletMap";
import Settings from "./Components/Settings";

const App: React.FC = () => {
    const [data, setData] = useState<any>(null)
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://qa-interview-test.qa.splytech.io/api/drivers?latitude=51.5049375&longitude=-0.0964509&count=50';

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(proxyUrl + targetUrl);
            let newData = await result.json();
            setData(newData)
        };

        fetchData()
}, [])

    return (
        <div className="App">
            <LeafletMap data={data}/>
            <Settings/>
        </div>
    );
}

export default App;
