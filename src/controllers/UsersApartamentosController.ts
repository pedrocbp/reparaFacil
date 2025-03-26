import { FastifyReply, FastifyRequest } from "fastify";
import { UsersApartamentosService } from "../services/UsersApartamentosService";

class UsersApartamentosController {
    async create(request: FastifyRequest, reply: FastifyReply){
        const {userId, apartamentoId} = request.body as {userId: number, apartamentoId: number};
        const UsersapartamentosService = new UsersApartamentosService();
        
        const relacao = await UsersapartamentosService.create({userId, apartamentoId});

        reply.send(relacao);
    }

    async list(request: FastifyRequest, reply: FastifyReply){
        const listUsersApartamentosService = new UsersApartamentosService();

        const relacao = await listUsersApartamentosService.list();

        reply.send(relacao);
    }

    async update(request: FastifyRequest, reply: FastifyReply){
        const {id} = request.query as {id: number}
        const {userId, apartamentoId} = request.body as {userId?: number, apartamentoId?: number}


        const relacao = await new UsersApartamentosService().update({id, userId, apartamentoId});

        reply.send(relacao)
    }

    async delete(request: FastifyRequest, reply: FastifyReply){
        const {id} = request.query as {id: number}
        
        const relacao = await new UsersApartamentosService().delete({id})

        reply.send(relacao)
    }
}
export { UsersApartamentosController };