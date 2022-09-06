import {Request, Response} from 'express'

class CreateUserController{
    handle(request: Request, response: Response)  {
        return response.json([
            {
                nome: 'Aline'
            }, 
            {
                nome: 'Edvania'
            }, 
            {
                nome: 'Manuela'
            }
        ])
    }
    
}

export { CreateUserController }