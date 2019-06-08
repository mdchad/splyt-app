export interface Position {
    lat: number,
    lng: number
}

export interface Drivers {
    driver_id: string,
    location: { bearing : number, latitude: number, longitude: number }
}
