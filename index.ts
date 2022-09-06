import express, {Request, response, Response} from "express";

const server = express();

server.get('/', (request: Request, response: Response) => {
    return response.json({mensagem: 'Bem vindo a nossa DIO API http://localhost:5000/'})

})

server.listen(5000, () => {
    console.log('Servidor on na porta 5000')
})