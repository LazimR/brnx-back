export interface ActionsCreateODT{
    id_demand: number,
    technician_name: string,
    description: string
}

export interface ActionsODT{
    id: number,
    id_demand: number,
    technician_name: string,
    description: string,
    creation_date: Date
}

export interface ActionsUpdateODT{
    id_demand?: number,
    technician_name?: string,
    description?: string
}