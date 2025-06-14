export interface CreateUserDTO{
    name: string,
    password: string
}

export interface UpdateUserDTO{
    name?: string,
    password?: string
}

export interface UserDTO{
    id: number,
    name: string
}