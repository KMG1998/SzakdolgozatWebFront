import axios, {AxiosError} from "axios";
import * as User from "../types/User";
import {toast} from 'vue3-toastify';
import ToastConfigs from "@/utils/toastConfigs";


const API_URL = 'http://localhost:8085/user/';
const axiosClient = axios.create({withCredentials: true})

class UserService {
  export
  default
  new

  async login(email: string, password: string): Promise<boolean | null> {
    let success = false
    await axiosClient.post(API_URL + 'signInAdmin', {
      email: email,
      password: password
    }).then(response => {
      if (response.data) {
        window.localStorage.setItem('userData', JSON.stringify(response.data as User))
        success = true;
      }
    }).catch((err) => {
        if (err instanceof AxiosError && err.response) {
          if (err.response.status === 400) {
            toast('Hibás adatok', ToastConfigs.errorToastConfig);
          }
        }
      }
    )
    return success
  }

  async createUser(email: string, password: string, name: string, userType: number): Promise<string | undefined> {
    let newUserId = undefined
    await axiosClient.post(API_URL + 'create', {
      email: email,
      password: password,
      name: name,
      type: userType
    })
      .then(response => {
        if (response.data) {
          newUserId = response.data
        }
      }).catch(err => {
        if (err instanceof AxiosError && err.response) {
          if (err.response.status === 400) {
            toast(err.response.statusText, ToastConfigs.errorToastConfig);
          }
        }
      });
    return newUserId
  }

  async getAllUsers() {
    try {
      const response = await axiosClient
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

  async getUser(userId: string): Promise<User | null> {
    let ret = null
    await axiosClient.post(API_URL + 'getUser', {userId: userId}).then(response => {
        if (response.data) {
          ret = response.data as User
        }
      }
    ).catch(err => {
      if (err instanceof AxiosError && err.response) {
        if (err.response.status === 400) {
          toast(err.response.statusText, ToastConfigs.errorToastConfig);
        }
      }
    })
    return ret
  }

  async updateUser(user: User): Promise<User | undefined> {
    let updatedUser = undefined
    await axiosClient.post(API_URL + 'updateUser', {userData: JSON.stringify(user)}).then(
      resp => {
        if (resp.data) {
          updatedUser = resp.data as User;
        }
      }
    ).catch(err => console.log(err))
    return updatedUser
  }

  async deleteUser(userId: string): Promise<boolean | undefined> {
    let success = false;
    await axiosClient.post(API_URL + 'deleteUser', {userId: userId}).then((resp) => {
      console.log(resp.data)
      if (resp.data === true) {
        success = true
      }
    }).catch(err => toast(err.message, ToastConfigs.errorToastConfig))
    return success;
  }

  async logOut(): Promise<boolean> {
    let success = false
    await axiosClient.post(API_URL + 'logOut').then((resp) => {
      if (resp.status === 200) {
        success = true
      }
    }).catch(err => {
    })
    return success
  }
}

export default new UserService()
