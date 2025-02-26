import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from '../services/DeleteCustomerService'; 

class DeleteCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as { id: string};
        
        const users = await new DeleteCustomerService().execute({ id });
        
        reply.send(users);
    }
}

export { DeleteCustomerController }