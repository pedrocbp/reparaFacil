import prismaClient from "../prisma";

interface CreateCustomerProps{
    name: string;
    email: string;
    type: string;
}

class CreateCustomerService{
    async execute({name, email, type}: CreateCustomerProps){
        if(!name || !email || !type){
            throw new Error("Preencha todos os campos");
        }

        const customer = await prismaClient.customer.create({
            data:{
                name,
                email,
                type,
                status: true
            }
        })

        return customer;

    }
}

export { CreateCustomerService };
