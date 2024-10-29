type Vehicle = undefined | {
    id: string,
    seats: number,
    color: string,
    type: string,
    airCond: boolean,
    available: boolean,
    plateNumber: string,
    insuranceId?: string
}

export default Vehicle
