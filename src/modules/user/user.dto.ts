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

export interface LoginUserDTO{
    name: string,
    password: string
}