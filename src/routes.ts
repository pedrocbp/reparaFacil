import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { UserController } from './controllers/UserController'; // Importando o controller unificado
import { CondominioController } from './controllers/CondominioController';
import { BlocoController } from './controllers/BlocoController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    const userController = new UserController(); // Instanciando o controller

    // Rota para criar um usuário
    fastify.post('/users', async (request: FastifyRequest, reply: FastifyReply) => {
        return userController.create(request, reply);
    });

    // Rota para listar os usuários
    fastify.get('/users', async (request: FastifyRequest, reply: FastifyReply) => {
        return userController.list(request, reply);
    });

    // Rota para deletar um usuário
    fastify.delete('/users', async (request: FastifyRequest, reply: FastifyReply) => {
        return userController.delete(request, reply);
    });

    // Rota para atualizar um usuário
    fastify.put('/users', async (request: FastifyRequest, reply: FastifyReply) => {
        return userController.update(request, reply);
    });

    const condominioController = new CondominioController(); // Instanciando o controller

    // Rota para cadastrar um condomínio
    fastify.post('/condominios', async (request: FastifyRequest, reply: FastifyReply) => {
        return condominioController.create(request, reply);
    })

    // Rota para listar condominios
    fastify.get('/condominios', async (request: FastifyRequest, reply: FastifyReply) => {
        return condominioController.list(request, reply);
    })

    // Rota para atualizar condominios
    fastify.put('/condominios', async (request: FastifyRequest, reply: FastifyReply) => {
        return condominioController.update(request, reply);
    })

    // Rota para deletar condominios
    fastify.delete('/condominios', async (request: FastifyRequest, reply: FastifyReply) => {
        return condominioController.delete(request, reply);
    })

    const blocoController = new BlocoController();

    // Rota para cadastrar um bloco
    fastify.post('/blocos', async (request: FastifyRequest, reply: FastifyReply) => {
        return blocoController.create(request, reply);
    })

    // Rota para listar blocos
    fastify.get('/blocos', async (request: FastifyRequest, reply: FastifyReply) => {
        return blocoController.list(request, reply);
    })

    // Rota para atualizar um bloco
    fastify.put('/blocos', async (request: FastifyRequest, reply: FastifyReply) => {
        return blocoController.update(request, reply);
    })

    // Rota para deletar um bloco
    fastify.delete('/blocos', async (request: FastifyRequest, reply: FastifyReply) => {
        return blocoController.delete(request, reply);
    })
}
