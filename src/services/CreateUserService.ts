import { getRepository } from 'typeorm';
import { Usuario } from '../entities/Usuario';

interface IUusuario {
    id: string,
    nome: string,
    email?: string
}


class CreateUserService {
    async execute({ id, nome, email }: IUusuario) {                          //Função responsável por salvar as informações no banco de dados
        const usuario = await getRepository(Usuario)
            .createQueryBuilder()
            .insert()
            .into(Usuario)
            .values([
                {
                    id: id,
                    nome: nome,
                    email: email
                }
            ])
            .execute()

        console.log(usuario.identifiers[0])
        return usuario.identifiers[0]
    }
}

export { CreateUserService }