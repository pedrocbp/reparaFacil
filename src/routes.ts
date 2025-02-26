import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from 'fastify'
import { CreateCustomerController } from './controllers/CreateCustomerController';
import { ListCustomersController } from './controllers/ListCustomersController';
import { DeleteCustomerController } from './controllers/DeleteCustomerController';
import { UpdateCustomerController } from './controllers/UpdateCustomerController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.post('/users', async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply);
    })

    fastify.get('/users', async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomersController().handle(request, reply);
    })

    fastify.delete('/users', async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply);
    })

    fastify.put('/users', async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateCustomerController().handle(request, reply);
    })

}