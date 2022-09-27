import { getConnection } from "typeorm";
import createConnection from "../database"
import { FakeData } from "../utils/mocks/fakeData/fakeData";
import { UpdateUserService } from "./UpdateUserService";

describe('UpdateUserService', () => {
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

    it('Deve editar o nome do usuário', async () => {
        const mockUser = await fakeData.createUser()

        const updateUserService = new UpdateUserService();

        const result = await updateUserService.execute({
            id: mockUser.id,
            nome: 'Aline teste'
        });

        expect(result).toHaveLength(0);
    })
})