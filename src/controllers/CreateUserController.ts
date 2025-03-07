import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from '../services/CreateUserService'; 
import { UserType } from "@prisma/client";

class CreateUserController{
    async handle(request: FastifyRequest, replay: FastifyReply){
        
        const { name, email, type, telefone, numero_do_documento } = request.body as { name: string, email: string, type: UserType, telefone: string, numero_do_documento: string };
        const userService = new CreateUserService();

        const users = await userService.execute({name, email, type, telefone, numero_do_documento});

        replay.send(users);

    }
}

export { CreateUserController }