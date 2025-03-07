import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteUserService } from '../services/DeleteUserService'; 

class DeleteUserController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as { id: number};
        
        const users = await new DeleteUserService().execute({ id });
        
        reply.send(users);
    }
}

export { DeleteUserController }