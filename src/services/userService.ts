import axios from "axios";
import User from "../types/User";
const API_URL = 'http://localhost:8085/user/';



class UserService {
    login(email:string,password:string) {
        return axios
            .post(API_URL + 'signIn',{
                email: email,
                password: password
            })
            .then(response => {
                if (response.data) {
                    localStorage.setItem('user', response.data);
                }
                return response.data;
            }).catch(err => console.log(err));
    }
    createUser(email:string,password:string,name:string,userType:number){
        return axios
            .post(API_URL + 'create',{
                email: email,
                password: password,
                name:name,
                type:userType
            })
            .then(response => {
                if (response.data) {
                    return response.data as User;
                }
            }).catch(err => console.log(err));
    }
}

export default new UserService()