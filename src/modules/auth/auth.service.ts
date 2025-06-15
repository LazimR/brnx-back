import bcrypt from "bcryptjs";

import { UserDTO } from "../user/user.dto";
import authentication from "./authentication";


class AuthService {
 
    async login(username: string, password: string): Promise<UserDTO> {

        const data = {
            name: username,
            password: password
        };

        try {
            return await authentication.AuthLogin(data);
        } catch (error: any) {
            throw new Error(`Erro ao realizar login: ${error.message}`);
        }
    }

}

export default new AuthService();