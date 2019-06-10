import React from 'react';
import {Marker, Popup} from "react-leaflet";
import {Drivers} from "../../../interface";

interface Props {
    data: { pickup_eta: number, drivers: Drivers[]}
}

const DriversMarker: React.FC<Props> = ({ data }) => {
    return (
        <>
            {data.drivers.map((driver: Drivers) => {
                return (
                    <Marker position={[driver.location.latitude, driver.location.longitude]} key={driver.driver_id}>
                        <Popup>
                            { driver.driver_id}
                        </Popup>
                    </Marker>
                )
            })}
        </>
    )
};

export default DriversMarker;
