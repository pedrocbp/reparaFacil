import { UserType } from "@prisma/client";
import prismaClient from "../prisma";

interface CreateUserProps{
    name: string;
    email: string;
    type: UserType;
    telefone: string;
    numero_do_documento: string;
}

interface UpdateUserProps {
    id: number;
    name?: string;
    email?: string;
    type?: UserType;
    telefone?: string;
    numero_do_documento?: string;
    status?: boolean;
}

interface DeleteUserProps{
    id: number;
}

class UserService {
    // Método para criar um usuário
    async create({ name, email, type, telefone, numero_do_documento }: CreateUserProps) {
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

    // Método para listar todos os usuários
    async list() {
        const users = await prismaClient.users.findMany();
        return users;
    }

    // Método para atualizar um usuário
    async update({ id, name, email, type, telefone, numero_do_documento, status }: UpdateUserProps) {

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
    
    // Método para deletar um usuário
    async delete({ id }: DeleteUserProps){

        if(!id){
            throw new Error('Solicitação inválida');
        }
        const findUser = await prismaClient.users.findFirst({
            where: {
                id: id
            }
        })

        if(!findUser){
            throw new Error('Cliente não encontrado!');
        }

        await prismaClient.users.delete({
            where: {
                id: id
            }
        });

        return { message: 'Cliente deletado com sucesso!' }
    }
}
export { UserService };