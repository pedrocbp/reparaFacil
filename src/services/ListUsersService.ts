import prismaClient from "../prisma";

class ListUserService{
    async execute(){
        const Users = await prismaClient.users.findMany();

        return Users;
    }
}

export { ListUserService };