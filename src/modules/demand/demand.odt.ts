export interface DemandCreateODT{
    id_provider: number,
    status: string,
    title: string,
    description: string,
    type: string
}

export interface DemandODT{
    id: number,
    id_provider: number,
    status: string,
    title: string,
    description: string,
    type: string,
    creation_date: Date
}

export interface DemandUpdateODT{
    id_provider?: number,
    status?: string,
    title?: string,
    description?: string,
    type?: string
}