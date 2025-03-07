import { UserType } from "@prisma/client";
import prismaClient from "../prisma";

interface CreateUserProps{
    name: string;
    email: string;
    type: UserType;
    telefone: string;
    numero_do_documento: string;
}

class CreateUserService{
    async execute({ name, email, type, telefone, numero_do_documento }: CreateUserProps) {
        if (!name || !email || !type || !telefone || !numero_do_documento) {
            throw new Error("Preencha todos os campos");
        }

        const users = await prismaClient.users.create({
            data:{
                name,
                email,
                type,
                status: true,
                telefone,
                numero_do_documento,
            }
        })

        return users;

    }
}

export { CreateUserService };
