import { FastifyRequest, FastifyReply } from "fastify";
import { ListUserService } from "../services/ListUsersService";

class ListUsersController {
    async handle(request: FastifyRequest, replay: FastifyReply){
        const listUserService = new ListUserService();

        const users = await listUserService.execute();

        replay.send(users);
    }
}

export { ListUsersController }