import {UUID} from "vue-uuid";

interface User{
    id: UUID,
    name:string,
    typeId:number,
    email:string,
    password:string,
    salt:string
}

export default User