import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from 'fastify'
import { CreateUserController } from './controllers/CreateUserController';
import { ListUsersController } from './controllers/ListUsersController';
import { DeleteUserController } from './controllers/DeleteUserController';
import { UpdateUserController } from './controllers/UpdateUserController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.post('/users', async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply);
    })

    fastify.get('/users', async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUsersController().handle(request, reply);
    })

    fastify.delete('/users', async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteUserController().handle(request, reply);
    })

    fastify.put('/users', async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateUserController().handle(request, reply);
    })

}