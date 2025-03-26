import prismaClient from "../prisma";

interface CreateUsersApartamentoProps {
    userId: number;
    apartamentoId: number;
}

interface UpdateUsersApartamentoProps {
    id: number;
    userId?: number;
    apartamentoId?: number;
}

interface DeleteUsersApartamentoProps {
    id: number
}

class UsersApartamentosService {
    async create({ userId, apartamentoId }: CreateUsersApartamentoProps) {
        if(!userId || !apartamentoId){
            throw new Error("Preencha todos os campos");
        }

        const relacao = await prismaClient.usersApartamentos.create({
            data: { 
                userId,
                apartamentoId
            }
        })
        return relacao;
    }

    async list() {
        const relacao = await prismaClient.usersApartamentos.findMany();
        return relacao;
    }

    async update({ id, userId, apartamentoId}: UpdateUsersApartamentoProps) {
        if(!id){
            throw new Error("Solicitação inválida: ID é obrigatório.");
        }

        const findApartamento = await prismaClient.usersApartamentos.findFirst({
            where:{
                id: Number(id)
            }
        })

        if(!findApartamento){
            throw new Error("Relação não encontrada")
        }

        await prismaClient.usersApartamentos.update({
            where:{
                id: Number(id)
            },
            data:{
                userId: userId,
                apartamentoId: apartamentoId            
            }
        });
        return { message: `Relação [${id}] atualizada com sucesso`}
    }

    async delete({ id }: DeleteUsersApartamentoProps) {
        if(!id){
            throw new Error("Solicitação inválida: ID é obrigatório.");
        }

        const findApartamento = await prismaClient.usersApartamentos.findFirst({
            where:{
                id: Number(id)
            }
        });

        if(!findApartamento){
            throw new Error("Condomínio não encontrado!")
        }

        await prismaClient.usersApartamentos.delete({
            where:{
                id: Number(id)
            }
        });

        return { message: `Relação [${id}] deletada com sucesso!`}


    }
}
export { UsersApartamentosService };