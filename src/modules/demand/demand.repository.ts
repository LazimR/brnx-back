import prisma from "../../config/prisma";
import { DemandCreateODT, DemandODT, DemandUpdateODT } from "./demand.odt";

class DemandRepository {
    async create(data: DemandCreateODT): Promise<DemandODT> {
        const demand = await prisma.demand.create({ data });
        return demand;
    }

    async getDemand(id: number): Promise<DemandODT> {
        const demand = await prisma.demand.findUnique({ where: { id } });
        if (!demand) {
            throw new Error(`Demanda com o id ${id} não foi encontrada`);
        }
        return demand;
    }

    async getAllDemand(): Promise<DemandODT[]> {
        const demandList = await prisma.demand.findMany();
        if (demandList.length === 0) {
            throw new Error('Nenhuma demanda cadastrada');
        }
        return demandList;
    }

    async update(id: number, data: DemandUpdateODT): Promise<DemandODT> {
        const demand = await prisma.demand.update({
            where: { id },
            data
        });
        return demand;
    }

    async delete(id: number) {
        return await prisma.demand.delete({ where: { id } });
    }
}

export default new DemandRepository();