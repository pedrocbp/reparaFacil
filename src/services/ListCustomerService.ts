import prismaClient from "../prisma";

class ListCustomerService{
    async execute(){
        const customers = await prismaClient.users.findMany();

        return customers;
    }
}

export { ListCustomerService };