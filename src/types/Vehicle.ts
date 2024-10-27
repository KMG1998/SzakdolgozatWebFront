import {UUID} from "vue-uuid";

type Vehicle = undefined | {
    id: UUID,
    seats: number,
    color: string,
    type: string,
    airCond: boolean,
    available: boolean,
    plateNumber: string,
    insuranceId?: string
}

export default Vehicle