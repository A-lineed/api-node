import { getConnection, QueryBuilder } from "typeorm";
import createConnection from '../database'
import { v4 as uuid } from 'uuid'
import { GetAllUserService } from "./GetAllUserService";
import { CreateUserService } from "./CreateUserService";


describe('GetAllUserService', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        await connection.query('DELETE FROM usuarios')
        await connection.close
    })


    it('Deve retornar todos os usuários cadastrados', async () => {
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

        const expectedResponse = [
            {
                nome: 'User teste1',
                email: 'test@gmail.com',
            },
            {
                nome: 'User teste2',
                email: '',
            }
        ]

        const getAllUserService = new GetAllUserService();
        const result = await getAllUserService.execute();

        expect(result).toMatchObject(expectedResponse)

    })
})
