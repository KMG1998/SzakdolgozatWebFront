type Vehicle = undefined | {
    id: string,
    seats: number,
    color: string,
    type: string,
    available: boolean,
    plateNumber: string,
    insuranceId?: string
}

export default Vehicle
