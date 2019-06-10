import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Drivers, Position } from '../../interface';
import {divIcon, DivIcon} from 'leaflet';
import './LeafletMap.css'
import useWindowDimensions from "../../hooks/Dimension";
import DriversMarker from "./DriversMarker/DriversMarker";

interface Props {
    data: { pickup_eta: number, drivers: Drivers[]}
    position: Position;
}

const LeafletMap: React.FC<Props> = ({ position, data }) => {
    const { width } = useWindowDimensions();
    const zoom = width < 376 ? 13 : 14;

    const icon: DivIcon = divIcon({
        className: '',
        iconAnchor: [0, 24],
        popupAnchor: [0, -36],
        html: `<span class='custom-pin'>HQ</span>`
    });

    return (
        <div className='map-height'>
            <Map center={[position.lat, position.lng]} zoom={zoom} className='map-height'>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[position.lat, position.lng]} icon={icon}>
                    <Popup>
                        Splyt HQ
                    </Popup>
                </Marker>
                <DriversMarker data={data}/>
            </Map>
        </div>
    )
};

export default LeafletMap
