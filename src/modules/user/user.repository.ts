import prisma from "../../config/prisma";

import { CreateUserDTO, UpdateUserDTO, UserDTO } from "./user.dto";

class UserRepository{

    async create(data: CreateUserDTO):Promise<UserDTO>{
        const user = await prisma.user.create({ data });
        return { id: user.id, name: user.name };
    }

    async getUser(id: number):Promise<UserDTO>{
        const user = await prisma.user.findUnique({
            where:{id}
        });

        if (!user) {
            throw new Error(`Usuario com o id ${id} não foi encontrado`);
        }
        return {id: user.id, name: user.name };
    }

    async getAllUser():Promise<UserDTO[]>{
        const userList = await prisma.user.findMany();

        if(userList.length === 0){
            throw new Error('Nenhum usuario cadastrado');
        }
        
        return userList.map((user: { id: any; name: any; }) => ({
            id: user.id,
            name: user.name
        }));
    }

    async update(id: number,data: UpdateUserDTO): Promise<UserDTO>{
        const user = await prisma.user.update({
            where:{id},
            data
        });
        return { id: user.id, name: user.name};
    }

    async delete(id: number){
        return await prisma.user.delete({where:{id}});      
    }
}

export default new UserRepository();