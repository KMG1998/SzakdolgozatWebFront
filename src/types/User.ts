import {UUID} from "vue-uuid";

type User = undefined | {
    id: UUID,
    name:string,
    typeId:number,
    email:string,
    password:string,
}

export default User