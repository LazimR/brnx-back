import demandRepository from "./demand.repository";
import { DemandCreateODT, DemandODT, DemandUpdateODT } from "./demand.odt";

class DemandService {
    async createDemand(data: DemandCreateODT): Promise<DemandODT> {
        return await demandRepository.create(data);
    }

    async getDemand(id: number): Promise<DemandODT> {
        return await demandRepository.getDemand(id);
    }

    async getAllDemand(): Promise<DemandODT[]> {
        return await demandRepository.getAllDemand();
    }

    async updateDemand(id: number, data: DemandUpdateODT): Promise<DemandODT> {
        return await demandRepository.update(id, data);
    }

    async deleteDemand(id: number) {
        return await demandRepository.delete(id);
    }
}

export default new DemandService();