import axios from "axios";
import * as Company from "../types/Company";
import {useCookies} from "vue3-cookies";

const API_URL = 'http://localhost:8085/company/';
const axiosClient = axios.create({withCredentials: true})
const { cookies } = useCookies();

class CompanyService {
  constructor() {
    axiosClient.interceptors.response.use(response => {
      return response;
    }, (error) => {
      if (error.status === 401) {
        cookies.remove('authenticated')
        cookies.remove('token')
      }
      return error;
    })
  }

  async createCompany(name: string,
                      officeAddress: string,
                      officeTel: string,
                      officeEmail: string) {
    return axiosClient
      .post(API_URL + 'create', {
        name: name,
        officeAddress: officeAddress,
        officeTel: officeTel,
        officeEmail: officeEmail
      })
      .then(response => {
        console.log(response);
        if (response.data) {
          return response.data as Company;
        }
      }).catch(err => console.log(err));
  }

  async getAllCompany(): Promise<Array<Company> | void> {
    return axiosClient
      .get(API_URL + 'allCompany')
      .then(response => {
        if (response.data) {
          const companies = Array<Company>();
          response.data.map(function (value: Company, key: number) {
            companies.push(value as Company)
          });
          return companies
        }
      }).catch(err => {
        console.log(err);
      });
  }

  getCompanyById() {
    return null
  }

  async getCompanyByWorker(workerId: string): Promise<Company | undefined> {
    return undefined
  }

}

export default new CompanyService
