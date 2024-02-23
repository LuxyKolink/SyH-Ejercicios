// import User from "../interface/user.interface";
import users from "../../database/users.json";

export default class UserModel {
    getTotalPages = (): number => {
        return Math.ceil(users.length / 5)
    }
}