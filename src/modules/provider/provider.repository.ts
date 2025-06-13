import prisma from "../../config/prisma";
import { ProviderCreateDTO, ProviderDTO, ProviderUpdateDTO } from "./provider.dto"

class ProviderRepository{

    async create(data: ProviderCreateDTO): Promise<ProviderDTO>{
        return await prisma.provider.create({ data })
    }

    async getProvider(id: number): Promise<ProviderDTO>{
        const provider = await prisma.provider.findUnique({ where: {id}})

        if(!provider){
            throw new Error(`Provedor com o ID ${id} não encontrado`)
        }

        return provider
    }

    async getAllProvider(): Promise<ProviderDTO[]>{
        const providerList = await prisma.provider.findMany()

        if(providerList.length === 0){
            throw new Error("Nenhum provedor cadastrado")
        }

        return providerList
    }

    async update(id: number, data: ProviderUpdateDTO): Promise<ProviderDTO>{
        return await prisma.provider.update({
            where: {id},
            data
        })
    }

    async delete(id: number){
        return await prisma.provider.delete({ where: {id} })
    }
}

export default new ProviderRepository;