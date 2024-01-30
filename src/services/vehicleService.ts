import axios from "axios";
import Vehicle from "../types/Vehicle";
const API_URL = 'http://localhost:8085/vehicle/';

class VehicleService {
    createVehicle( seats: number,
                   plateNum:string,
                   carType:string,
                   airCond:number) {
        return axios
            .post(API_URL + 'create',{
                seats: seats,
                plateNumber: plateNum,
                type:carType,
                airCond: airCond == 0 ? false : true
            })
            .then(response => {
                if (response.data) {
                    return response.data as Vehicle;
                }
            }).catch(err => console.log(err));
    }

    connectUserToVehicle(userId:string,vehicleId:string) {
        return axios
            .post(API_URL + 'connectUserToVehicle',{
                userId: userId,
                vehicleId: vehicleId
            })
            .then(response => {
                if (response.data) {
                    return response.status;
                }
            }).catch(err => console.log(err));
    }
}

export default new VehicleService()