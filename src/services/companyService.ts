import axios from "axios";
import Company from "../types/Company";

const API_URL = 'http://localhost:8085/company/';
const axiosClient = axios.create({withCredentials: true})

class CompanyService {
    createCompany(name: string,
                  officeAddress: string,
                  officeTel: string,
                  officeEmail: string){
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

    getAllCompany() {
        return axiosClient
            .get(API_URL + 'allCompany')
            .then(response => {
                console.log(response);
                if (response.data) {
                    const companies = Array<Company>();
                    response.data.map(function (value: Company, key: number) {
                        companies.push(value as Company)
                    });
                    return companies;
                }
            }).catch(err => console.log(err));
    }

    getCompanyById(){
        return null
    }

    getCompanyByWorker(){
        return null
    }

}

export default new CompanyService