import { FastifyReply, FastifyRequest } from "fastify";
import { UserType } from "@prisma/client";

import { UserService } from "../services/UserService";

class UserController {
    async create(request: FastifyRequest, replay: FastifyReply){
        const { name, email, type, telefone, numero_do_documento } = request.body as { name: string, email: string, type: UserType, telefone: string, numero_do_documento: string };
        const userService = new UserService();

        const users = await userService.create({name, email, type, telefone, numero_do_documento});

        replay.send(users);
    }

    async list(request: FastifyRequest, reply: FastifyReply) {
        const listUserService = new UserService();

        const users = await listUserService.list();

        reply.send(users);
    }

    async update(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: number };
        const { name, email, type, telefone, numero_do_documento, status } = request.body as { name?: string; email?: string, type?: UserType, telefone?: string, numero_do_documento?: string, status?: boolean };

        const users = await new UserService().update({ id, name, email, type, telefone, numero_do_documento, status });

        reply.send(users);
    }

    async delete(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: number};
        
        const users = await new UserService().delete({ id });
        
        reply.send(users);
    }
}
export { UserController };