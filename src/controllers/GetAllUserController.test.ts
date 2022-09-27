import { getConnection } from 'typeorm';
import createConnection from '../database'
import { FakeData } from '../utils/mocks/fakeData/fakeData';
import { makeMockRequest } from '../utils/mocks/MockRequest';
import { makeMockResponse } from '../utils/mocks/MockResponse';
import { GetAllUserController } from "./GetAllUserController";


describe('GetAllUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        connection.query('DELETE FROM usuarios')
        connection.close()
    })
    const fakeData = new FakeData();
    it('Deve retornar status 200 quando pegar todos os usuários', async () => {
        await fakeData.execute();

        const getAllUserController = new GetAllUserController();
        const request = makeMockRequest({})

        const response = makeMockResponse()

        await getAllUserController.handle(request, response)
        expect(response.state.status).toBe(200)

    })
})

