interface IUusuario {
    nome: string, 
    email: string
}


class CreateUserService{
    execute({ nome, email }:IUusuario){                          //Função responsável por salvar as informações no banco de dados
        const data = [];

        data.push({nome, email})
        
        return data;
    }
}

export {CreateUserService}