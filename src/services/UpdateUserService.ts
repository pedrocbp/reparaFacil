import { UserType } from "@prisma/client";
import prismaClient from "../prisma";

interface UpdateUserProps {
    id: number;
    name?: string;
    email?: string;
    type?: UserType;
    telefone?: string;
    numero_do_documento?: string;
    status?: boolean;
}

class UpdateUserService {
    async execute({ id, name, email, type, telefone, numero_do_documento, status }: UpdateUserProps) {

        if (!id) {
            throw new Error("Solicitação inválida: ID é obrigatório.");
        }

        const findUser = await prismaClient.users.findFirst({
            where: { 
                id: Number(id) 
            }
        });

        if (!findUser) {
            throw new Error("Cliente não encontrado!");
        }

        await prismaClient.users.update({
            where: { 
                id: Number(id) 
            },
            data: { 
                name: name, 
                email: email,
                type: type,
                telefone: telefone,
                numero_do_documento: numero_do_documento,
                status: status
            }

        });

        return { message: `Cliente [${id}] atualizado com sucesso!` }

    }
}

export { UpdateUserService };
