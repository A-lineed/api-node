import { CreateUserService } from "../../../services/CreateUserService";
import { v4 as uuid } from "uuid"
class FakeData {
    createUserService = new CreateUserService();
    async execute(){

        await this.createUserService.execute({
            id: uuid(),
            nome: 'User teste1',
            email: 'test@gmail.com',
        })

        await this.createUserService.execute({
            id: uuid(),
            nome: 'User teste2',
            email: '',
        })
    }
    async createUser() {
      const user = await this.createUserService.execute({
            id: uuid(),
            nome: 'Aline',
            email: 'aline@gmail.com',
        })
        return user
    }
}

export { FakeData }