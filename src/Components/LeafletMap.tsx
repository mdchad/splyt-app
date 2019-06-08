import React, { useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

interface Position {
    lat: number,
    lng: number
}

interface Drivers {
    driver_id: string,
    location: { bearing : number, latitude: number, longitude: number }
}

interface Props {
    data: { pickup_eta: number, drivers: Drivers[]}
}

const LeafletMap: React.FC<Props> = ({ data }) => {
    const [position, setPosition] = useState<Position>({ lat: 51.5049375, lng: -0.0964509 });
    console.log(data)
    return (
        data ? <div style={{ height: '600px'}}>
            <Map center={[position.lat, position.lng]} zoom={15} style={{ height: '600px'}}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[position.lat, position.lng]}>
                    <Popup>
                        HQ bruhhhh
                    </Popup>
                </Marker>
                {data.drivers.map(driver => {
                    return <Marker position={[driver.location.latitude, driver.location.longitude]}>
                        <Popup>
                            { driver.driver_id}
                        </Popup>
                    </Marker>
                })}
            </Map>
        </div> : <p>loadingg</p>
    )
};

export default LeafletMap
