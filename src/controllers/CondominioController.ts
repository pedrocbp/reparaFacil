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

        const condominios = await listCondominioService.list();

        reply.send(condominios);
    }

    async update(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as { id: number};
        const { name, bairro, rua, numero, cep, cidade, status } = request.body as { name?: string, bairro?: string, rua?: string, numero?: string, cep?: string, cidade?: string, status?: boolean};
        
        const condominios = await new CondominioService().update({id, name, bairro, rua, numero, cep, cidade, status});

        reply.send(condominios);
    }

    async delete(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: number};
        
        const condominios = await new CondominioService().delete({ id });
        
        reply.send(condominios);
    }
}
export { CondominioController };