import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateCustomerService } from "../services/UpdateCustomerService";

class UpdateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string };
        const { name, email, type } = request.body as { name?: string; email?: string, type?: string };

        const customer = await new UpdateCustomerService().execute({ id, name, email, type });

        reply.send(customer);
    }
}

export { UpdateCustomerController };
