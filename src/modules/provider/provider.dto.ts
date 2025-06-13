export interface ProviderCreateDTO{
    name: string,
    responsible_name: string,
    email: string
}

export interface ProviderDTO{
    id: number,
    name: string,
    responsible_name: string,
    email: string
}

export interface ProviderUpdateDTO{
    name?: string,
    responsible_name?: string,
    email?: string
}