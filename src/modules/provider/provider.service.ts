import providerRepository from "./provider.repository";

import { ProviderCreateDTO, ProviderDTO, ProviderUpdateDTO } from "./provider.dto";

class ProviderService{
    async createProvider(data: ProviderCreateDTO): Promise<ProviderDTO>{
        return await providerRepository.create(data);
    }

    async getProvider(id: number): Promise<ProviderDTO>{
        return await providerRepository.getProvider(id);
    }

    async getAllProvider(): Promise<ProviderDTO[]>{
        return await providerRepository.getAllProvider();
    }

    async updateProvider(id: number, data:ProviderUpdateDTO): Promise<ProviderDTO>{
        return await providerRepository.update(id, data);
    }

    async deleteProvider(id: number){
        return await providerRepository.delete(id)
    }
}

export default new ProviderService;