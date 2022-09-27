import { CreateUserService } from "../../../services/CreateUserService";
import { v4 as uuid } from "uuid"
class FakeData {
    async execute(){
        const createUserService = new CreateUserService();

        await createUserService.execute({
            id: uuid(),
            nome: 'User teste1',
            email: 'test@gmail.com',
        })

        await createUserService.execute({
            id: uuid(),
            nome: 'User teste2',
            email: '',
        })
    }
}

export { FakeData }