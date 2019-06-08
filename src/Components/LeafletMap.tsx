import React, { useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Drivers, Position } from "../Interface";
import {divIcon, DivIcon, DivIconOptions, IconOptions} from "leaflet";

interface Props {
    data: { pickup_eta: number, drivers: Drivers[]}
    position: Position;
}

const LeafletMap: React.FC<Props> = ({ data, position }) => {
    const myCustomColour: string = '#583470';

    const markerHtmlStyles = `
      background-color: ${myCustomColour};
      color: white;
      width: 2rem;
      height: 2rem;
      display: block;
      left: -1.5rem;
      top: -1.5rem;
      position: relative;
      border-radius: 3rem 3rem 0;
      transform: rotate(45deg);
      border: 1px solid #FFFFFF`

    const icon: DivIcon = divIcon({
        className: "my-custom-pin",
        iconAnchor: [0, 24],
        // labelAnchor: [-6, 0],
        popupAnchor: [0, -36],
        html: `<span style='${markerHtmlStyles}'>HQ</span>`
    })

    return (
        <div style={{ height: '600px'}}>
            <Map center={[position.lat, position.lng]} zoom={15} style={{ height: '600px'}}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[position.lat, position.lng]} icon={icon}>
                    <Popup>
                        HQ bruhhhh
                    </Popup>
                </Marker>
                {data.drivers.map(driver => {
                    return <Marker position={[driver.location.latitude, driver.location.longitude]} key={driver.driver_id}>
                        <Popup>
                            { driver.driver_id}
                        </Popup>
                    </Marker>
                })}
            </Map>
        </div>
    )
};

export default LeafletMap
