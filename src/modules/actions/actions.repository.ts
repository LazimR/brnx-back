import prisma from "../../config/prisma";
import { ActionsCreateODT, ActionsODT, ActionsUpdateODT } from "./actions.odt";

class ActionsRepository {
    async create(data: ActionsCreateODT): Promise<ActionsODT> {
        try{
            const action = await prisma.actions.create({ data:{
                id_demand:data.id_demand,
                technician_name:data.technician_name,
                description:data.description
                }
             });
            return action;
        }catch(error: any){
            console.log(error)
            throw new Error(error.message)
        }
        
    }

    async getAction(id: number): Promise<ActionsODT> {
        const action = await prisma.actions.findUnique({ where: { id } });
        if (!action) {
            throw new Error(`Ação com o id ${id} não foi encontrada`);
        }
        return action;
    }

    async getAllActionsByDemandId(demandId:number): Promise<ActionsODT[]> {
        const actionsList = await prisma.actions.findMany({where:{id_demand:demandId}});
        if (actionsList.length === 0) {
            throw new Error('Nenhuma ação cadastrada');
        }
        return actionsList;
    }

    async getAllActions(): Promise<ActionsODT[]> {
        const actionsList = await prisma.actions.findMany();
        if (actionsList.length === 0) {
            throw new Error('Nenhuma ação cadastrada');
        }
        return actionsList;
    }

    async update(id: number, data: ActionsUpdateODT): Promise<ActionsODT> {
        const action = await prisma.actions.update({
            where: { id },
            data
        });
        return action;
    }

    async delete(id: number) {
        return await prisma.actions.delete({ where: { id } });
    }
}

export default new ActionsRepository();