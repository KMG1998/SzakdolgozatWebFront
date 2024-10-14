import {UUID} from "vue-uuid";

type Company = {
    id: UUID,
    companyName: string;
    officeAddress: string;
    officeTel: string;
    officeEmail: string;
}

export default Company