import React, { useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


const LeafletMap: React.FC = () => {
    const [position, setPosition] = useState<any>({ lat: 51.5049375, lng: -0.0964509 });
    return (
        <div style={{ height: '600px'}}>
            <Map center={[position.lat, position.lng]} zoom={15} style={{ height: '600px'}}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[position.lat, position.lng]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </Map>
        </div>
    )
}

export default LeafletMap
