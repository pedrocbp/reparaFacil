import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateUserService } from "../services/UpdateUserService";
import { UserType } from "@prisma/client";

class UpdateUserController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: number };
        const { name, email, type, telefone, numero_do_documento, status } = request.body as { name?: string; email?: string, type?: UserType, telefone?: string, numero_do_documento?: string, status?: boolean };

        const users = await new UpdateUserService().execute({ id, name, email, type, telefone, numero_do_documento, status });

        reply.send(users);
    }
}

export { UpdateUserController };
