import axios, {AxiosError} from "axios";
import User from "../types/User";
import {toast} from 'vue3-toastify';

const API_URL = 'http://localhost:8085/user/';
const axiosClient = axios.create({withCredentials:true})

class UserService {
    async login(email: string, password: string): Promise<boolean | null> {
        return axiosClient.post(API_URL + 'signIn', {
            email: email,
            password: password
        }).then(response => {
            if (response.data) {
                window.localStorage.setItem('authenticated','true')
                window.localStorage.setItem('userData', JSON.stringify(response.data as User));
                return true;
            }
            console.log(response)
            return false;
        }).catch(err => {
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
            },
        )
    }

    createUser(email: string, password: string, name: string, userType: number) {
        return axiosClient
            .post(API_URL + 'create', {
                email: email,
                password: password,
                name: name,
                type: userType
            })
            .then(response => {
                console.log(response);
                if (response.data) {
                    return response.data as User;
                }
            }).catch(err => console.log(err));
    }

    getAllUsers() {
        return axiosClient
            .get(API_URL + 'allUsers')
            .then(response => {
                console.log(response);
                if (response.data) {
                    const users = Array<User>();
                    response.data.map(function (value: User, key: number) {
                        users.push(value as User)
                    });
                    return users;
                }
            }).catch(err => console.log(err));
    }

    isAuthenticated(){ return window.localStorage.getItem('authenticated')}
}

export default new UserService()