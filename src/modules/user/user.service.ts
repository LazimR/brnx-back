import userRepository from "./user.repository";
import { CreateUserDTO, UpdateUserDTO, UserDTO } from "./user.dto";
import bcrypt from 'bcrypt';

class UserService {
  async createUser(data: CreateUserDTO): Promise<UserDTO> {
    if (data.password.length < 6) {
      throw new Error("A senha deve ter no mínimo 6 caracteres");
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    return await userRepository.create({
      name: data.name,
      password: hashedPassword
    });
  }

  async getUser(id: number): Promise<UserDTO> {   
    return await userRepository.getUser(id);
  }

  async getAllUser(): Promise<UserDTO[]> {
    return await userRepository.getAllUser();
  }

  async updateUser(id: number, data: UpdateUserDTO): Promise<UserDTO> {
    if (data.password) {
        if (data.password.length < 6) {
            throw new Error("A senha deve ter no mínimo 6 caracteres");
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        data.password = hashedPassword;
    }

    return await userRepository.update(id, data);
}

  async deleteUser(id: number){
    return await userRepository.delete(id);
  }
}

export default new UserService();
