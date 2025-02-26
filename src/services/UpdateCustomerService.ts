import prismaClient from "../prisma";

interface UpdateCustomerProps {
    id: string;
    name?: string;
    email?: string;
    type?: string;
}

class UpdateCustomerService {
    async execute({ id, name, email, type }: UpdateCustomerProps) {

        if (!id) {
            throw new Error("Solicitação inválida: ID é obrigatório.");
        }

        const findCustomer = await prismaClient.users.findFirst({
            where: { 
                id: id 
            }
        });

        if (!findCustomer) {
            throw new Error("Cliente não encontrado!");
        }

        await prismaClient.users.update({
            where: { 
                id: id 
            },
            data: { 
                name: name, 
                email: email,
                type: type
            }

        });

        return { message: `Cliente [${id}] atualizado com sucesso!` }

    }
}

export { UpdateCustomerService };
