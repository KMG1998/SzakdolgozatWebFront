import {UUID} from "vue-uuid";

interface Vehicle {
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