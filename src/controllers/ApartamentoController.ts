import { FastifyReply, FastifyRequest } from "fastify";
import { ApartamentoService } from "../services/ApartamentoService";

class ApartamentoController {
    async create(request: FastifyRequest, reply: FastifyReply){
        const {name, blocoId} = request.body as {name: string, blocoId: number};
        const apartamentoService = new ApartamentoService();
        
        const apartamento = await apartamentoService.create({name, blocoId});

        reply.send(apartamento);
    }

    async list(request: FastifyRequest, reply: FastifyReply){
        const listApartamentoService = new ApartamentoService();

        const apartamento = await listApartamentoService.list();

        reply.send(apartamento);
    }
}
export { ApartamentoController };