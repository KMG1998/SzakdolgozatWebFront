import {UUID} from "vue-uuid";

type Vehicle = {
    id: UUID,
    seats: number,
    description: string,
    type: string,
    airCond: boolean,
    available: boolean,
    plateNumber: string,
    insuranceId?: string
}

export default Vehicle