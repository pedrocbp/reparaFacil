import prismaClient from "../prisma";

interface CreateApartamentoProps {
    name: string;
    blocoId: number;
}

interface UpdateApartamentoProps {
    id: number;
    name?: string;
    blocoId?: number;
    status?: boolean;
}

interface DeleteApartamentoProps {
    id: number
}

class ApartamentoService {
    async create({ name, blocoId }: CreateApartamentoProps) {
        if(!name || !blocoId){
            throw new Error("Preencha todos os campos");
        }

        const apartamento = await prismaClient.apartamentos.create({
            data: { 
                name,
                blocoId
            }
        })
        return apartamento;
    }

    async list() {
        const apartamento = await prismaClient.apartamentos.findMany();
        return apartamento;
    }

    async update({ id, name, blocoId, status}: UpdateApartamentoProps) {
        if(!name){
            throw new Error("Solicitação inválida: ID é obrigatório.");
        }

        const findApartamento = await prismaClient.apartamentos.findFirst({
            where:{
                id: Number(id)
            }
        })

        if(!findApartamento){
            throw new Error("Apartamento não encontrado")
        }

        await prismaClient.apartamentos.update({
            where:{
                id: Number(id)
            },
            data:{
                name: name,
                blocoId: blocoId,
                status: status
            }
        });
        return { message: `Apartamento [${id}] atualizado com sucesso`}
    }

    async delete({ id }: DeleteApartamentoProps) {
        if(!id){
            throw new Error("Solicitação inválida: ID é obrigatório.");
        }

        const findApartamento = await prismaClient.apartamentos.findFirst({
            where:{
                id: Number(id)
            }
        });

        if(!findApartamento){
            throw new Error("Condomínio não encontrado!")
        }

        await prismaClient.apartamentos.delete({
            where:{
                id: Number(id)
            }
        });

        return { message: `Apartamento [${id}] deletado com sucesso!`}


    }
}
export { ApartamentoService };