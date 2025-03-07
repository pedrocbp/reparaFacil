import { FastifyReply, FastifyRequest } from "fastify";
import { CondominioService } from "../services/CondominioService";

class CondominioController {
    async create(request: FastifyRequest, reply: FastifyReply){
        const { name, bairro, rua, numero, cep, cidade } =  request.body as {name: string, bairro: string, rua: string, numero: string, cep: string, cidade: string}
        const condominioService = new CondominioService();

        const condominios = await condominioService.create({name, bairro, rua, numero, cep, cidade})

        reply.send(condominios)
    }

    async list(request: FastifyRequest, reply: FastifyReply){
        const listCondominioService = new CondominioService();

        const users = await listCondominioService.list();

        reply.send(users);
    }
}
export { CondominioController };