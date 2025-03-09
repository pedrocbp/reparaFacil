import { FastifyReply, FastifyRequest } from "fastify";
import { BlocoService } from "../services/BlocoService";

class BlocoController {
    async create(request: FastifyRequest, reply: FastifyReply){
        const { name, condominioId } = request.body as {name: string, condominioId: number};
        const blocoService = new BlocoService();
        
        const blocos = await blocoService.create({name, condominioId});

        reply.send(blocos);
    }

    async list(request: FastifyRequest, reply: FastifyReply){
        const listBlocoService = new BlocoService();

        const blocos = await listBlocoService.list();

        reply.send(blocos);
    }

    async update(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as { id: number};
        const { name, condominioId, status } = request.body as { name?: string, condominioId?: number, status?: boolean};
        
        const blocos = await new BlocoService().update({id, name, condominioId, status});

        reply.send(blocos);
    }

    async delete(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: number};
        
        const blocos = await new BlocoService().delete({ id });
        
        reply.send(blocos);
    }
}
export { BlocoController };
