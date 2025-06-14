import bcrypt from "bcrypt";

import { UserDTO } from "../user/user.dto";
import authentication from "./authentication";


class AuthService {
 
    async login(username: string, password: string): Promise<UserDTO> {

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const data = {
            name: username,
            password: hashedPassword
        };

        try {
            return await authentication.AuthLogin(data);
        } catch (error: any) {
            throw new Error(`Erro ao realizar login: ${error.message}`);
        }
    }

}

export default new AuthService();