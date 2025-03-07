import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { UserController } from './controllers/UserController'; // Importando o controller unificado

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    const userController = new UserController(); // Instanciando o controller

    // Rota para criar um usuário
    fastify.post('/users', async (request: FastifyRequest, reply: FastifyReply) => {
        return userController.create(request, reply); // Chama o método create
    });

    // Rota para listar os usuários
    fastify.get('/users', async (request: FastifyRequest, reply: FastifyReply) => {
        return userController.list(request, reply); // Chama o método list
    });

    // Rota para deletar um usuário
    fastify.delete('/users', async (request: FastifyRequest, reply: FastifyReply) => {
        return userController.delete(request, reply); // Chama o método delete
    });

    // Rota para atualizar um usuário
    fastify.put('/users', async (request: FastifyRequest, reply: FastifyReply) => {
        return userController.update(request, reply); // Chama o método update
    });

}
