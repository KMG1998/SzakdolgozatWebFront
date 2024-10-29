import axios, {AxiosError} from "axios";
import * as User from "../types/User";
import {toast} from 'vue3-toastify';


const API_URL = 'http://localhost:8085/user/';
const axiosClient = axios.create({withCredentials: true})

class UserService {
    async login(email: string, password: string): Promise<boolean | null> {
        return axiosClient.post(API_URL + 'signInAdmin', {
            email: email,
            password: password
        }).then(response => {
            if (response.data) {
                window.localStorage.setItem('userData', JSON.stringify(response.data as User))
                return true;
            }
            return false;
        }).catch((err) => {
                if (err instanceof AxiosError && err.response) {
                    if (err.response.status === 400) {
                        toast('YA FUCKED UP', {
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
                return null
            }
        )
    }

    async createUser(email: string, password: string, name: string, userType: number): Promise<User | undefined> {
        return axiosClient
            .post(API_URL + 'create', {
                email: email,
                password: password,
                name: name,
                type: userType
            })
            .then(response => {
                if (response.data) {
                    return response.data as User;
                }
                return undefined;
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
            });
    }

    async getAllUsers() {
        try {
            let response = await axiosClient
                .get(API_URL + 'allUsers');
            if (response.data) {
                const users = Array<User>();
                response.data.map(function (value: User) {
                    users.push(value as User)
                });
                return users;
            }
        } catch (err) {
            return console.log(err);
        }
    }

    async getUser(userId:string): Promise<User | null> {
        return axiosClient.post(API_URL + 'getUser',{userId:userId}).then(response => {
                if (response.data) {
                    return response.data as User
                }
                return null
            }
        ).catch(err => {
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
            return null
        })
    }

    async updateUser(user:User): Promise<boolean>{
        axiosClient.post(API_URL+'updateUser',{userData:JSON.stringify(user)}).then(
            resp => {
                return resp.data as boolean;
            }
        ).catch(err => console.log(err))
        return false
    }
}

export default new UserService()
