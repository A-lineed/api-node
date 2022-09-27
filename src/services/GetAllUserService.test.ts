import { getConnection, QueryBuilder } from "typeorm";
import createConnection from '../database'
import { FakeData } from "../utils/mocks/fakeData/fakeData";
import { GetAllUserService } from "./GetAllUserService";



describe('GetAllUserService', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        await connection.query('DELETE FROM usuarios')
        await connection.close()
    })

    const fakeData = new FakeData();

    it('Deve retornar todos os usuários cadastrados', async () => {

        await fakeData.execute()
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
