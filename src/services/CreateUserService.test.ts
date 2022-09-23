import { getConnection } from "typeorm";
import createConnection from '../database'
import { v4 as uuid } from "uuid";
import { CreateUserService } from "./CreateUserService";

describe('CreateUserService', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        await connection.query('DELETE FROM usuarios')
        await connection.close()
    })

    const createUserService = new CreateUserService();
    it('Deve retornar o ID do usuário criado ', async () => {

        const result = await createUserService.execute({
            id: uuid(),
            nome: 'Usuário teste',
            email: 'userteste@gmail.com'
        })


        expect(result).toHaveProperty('id')
    })
})