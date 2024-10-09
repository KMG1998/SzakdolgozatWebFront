import axios from "axios";
import Company from "../types/Company";

const API_URL = 'http://localhost:8085/company/';

class CompanyService {
    createCompany(name: string,
                  officeAddress: string,
                  officeTel: string,
                  officeEmail: string){
        return axios
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
        return axios
            .get(API_URL + 'allCompany')
            .then(response => {
                console.log(response);
                if (response.data) {
                    const users = Array<Company>();
                    response.data.map(function (value: Company, key: number) {
                        users.push(value as Company)
                    });
                    return users;
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