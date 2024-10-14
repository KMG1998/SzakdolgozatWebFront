import axios,{AxiosError}  from "axios";
import Vehicle from "../types/Vehicle";
import {toast} from "vue3-toastify";

const API_URL = 'http://localhost:8085/vehicle/';
const axiosClient = axios.create({withCredentials:true})

class VehicleService {
    createVehicle(seats: number,
                  plateNum: string,
                  carType: string,
                  airCond: number) {
        return axiosClient
            .post(API_URL + 'create', {
                seats: seats,
                plateNumber: plateNum,
                type: carType,
                airCond: airCond == 0 ? false : true
            })
            .then(response => {
                if (response.data) {
                    return response.data as Vehicle;
                }
            }).catch(err => console.log(err));
    }

    async connectUserToVehicle(userId: string, vehicleId: string): Promise<boolean> {
        return axiosClient
            .post(API_URL + 'connectUserToVehicle', {
                userId: userId,
                vehicleId: vehicleId
            })
            .then(response => {
                if (response.data) {
                    return true;
                }
                return false
            }).catch(err => {
                if (err instanceof AxiosError && err.response) {
                    if (err.response.status === 400) {
                        toast(err.response.statusText, {
                            position: toast.POSITION.BOTTOM_LEFT,
                            autoClose: 2000,
                            type: "error",
                            transition: "slide",
                            hideProgressBar: true,
                            icon: false,
                            toastStyle: {"background-color": "#ed4e42", "color": "#ffffff"}
                        });
                    }
                }
                return false
            })
    }

    async getAllVehicles(): Promise<any[] | undefined> {
        return axiosClient
            .get(API_URL + 'allVehicles',)
            .then(response => {
                if (response.data) {
                    const vehicles = Array<Vehicle>();
                    console.log(response.data);
                    response.data.map(function (value: Vehicle, key: number) {
                        vehicles.push(value as Vehicle)
                    });
                    return vehicles;
                }
                return undefined
            }).catch(err => {
                if (err instanceof AxiosError && err.response) {
                    if (err.response.status === 400) {
                        toast(err.response.statusText, {
                            position: toast.POSITION.BOTTOM_LEFT,
                            autoClose: 2000,
                            type: "error",
                            transition: "slide",
                            hideProgressBar: true,
                            icon: false,
                            toastStyle: {"background-color": "#ed4e42", "color": "#ffffff"}
                        });
                    }
                }
                return undefined
            })
    }
}

export default new VehicleService()