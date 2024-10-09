import {UUID} from "vue-uuid";

interface Company{
    id: UUID,
    name: string;
    officeAddress: string;
    officeTel: string;
    officeEmail: string;
}

export default Company