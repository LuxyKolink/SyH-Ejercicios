// import User from "../interface/user.interface";
import users from "../../database/users.json";
import User from "../interface/user.interface";

export default class UserModel {
    getTotalPages = (): number => {
        return Math.ceil(users.length / 5)
    }

    getById = (id: string): User | null => {
        try {
            if (users !== undefined) {
                for (const userEntity of users) {
                    if (userEntity.id === +id) {
                        return {
                            id: userEntity.id,
                            user: userEntity.user
                        }
                    }
                }
            }
        } catch (error) {
            console.error(error);

        }
        return null
    }

    getAll = (): User[] => {
        try {
            if (users !== undefined) {
                const usersList: User[] = []
                for (const userEntity of users) {
                    if (userEntity === null) {
                        console.error("User not found");
                        return []
                    }
                    usersList.push({
                        id: userEntity.id,
                        user: userEntity.user
                    })
                }
                return usersList
            }
        } catch (error) {
            console.error(error);
            
        }
        return []
    }
}