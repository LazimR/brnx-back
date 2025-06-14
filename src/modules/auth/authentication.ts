import prisma from "../../config/prisma";
import { LoginUserDTO } from "./auth.dto";
import { UserDTO } from "../user/user.dto";

class Authentication{

    async AuthLogin(data: LoginUserDTO): Promise<UserDTO>{
        const user = await prisma.user.findUnique({
            where:{
                name: data.name
            }
        })

        if(!user){
            throw new Error("Usuario não encontrado!")
        }
        if(user?.password !== data.password){
                throw new Error("Senha incorreta!")
            }

        return { id: user.id, name: user.name}
    }

}

export default new Authentication();