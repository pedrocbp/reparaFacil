import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from '../services/CreateCustomerService'; 

class CreateCustomerController{
    async handle(request: FastifyRequest, replay: FastifyReply){
        
        const { name, email, type } = request.body as { name: string, email: string, type: string };
        console.log(name, email, type);
        const customerService = new CreateCustomerService();

        const users = await customerService.execute({name, email, type});

        replay.send(users);

    }
}

export { CreateCustomerController }