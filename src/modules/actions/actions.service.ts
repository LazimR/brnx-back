import actionsRepository from "./actions.repository";
import { ActionsCreateODT, ActionsODT, ActionsUpdateODT } from "./actions.odt";

class ActionsService {
    async createAction(data: ActionsCreateODT): Promise<ActionsODT> {
        return await actionsRepository.create(data);
    }

    async getAction(id: number): Promise<ActionsODT> {
        return await actionsRepository.getAction(id);
    }

    async getAllActions(): Promise<ActionsODT[]> {
        return await actionsRepository.getAllActions();
    }

    async updateAction(id: number, data: ActionsUpdateODT): Promise<ActionsODT> {
        return await actionsRepository.update(id, data);
    }

    async deleteAction(id: number) {
        return await actionsRepository.delete(id);
    }
}

export default new ActionsService();