import prismaClient from "../prisma";

interface CreateBlocoProps {
    name: string;
    condominioId: number;
}

interface UpdateBlocoProps {
    id: number;
    name?: string;
    condominioId?: number;
    status?: boolean;
}

interface DeleteBlocoProps {
    id: number;
}

class BlocoService {
    async create({ name, condominioId }: CreateBlocoProps) {
        if (!name || !condominioId) {
            throw new Error("Preencha todos os campos");
        }

        const bloco = await prismaClient.blocos.create({
            data: {
                name,
                condominioId
            }
        })
        return bloco;
    }
    
    async list() {
        const blocos = await prismaClient.blocos.findMany();
        return blocos;
    }

    async update({id, name, condominioId, status}: UpdateBlocoProps) {
        if(!id){
            throw new Error("Solicitação inválida: ID é obrigatório.");
        }

        const findBloco = await prismaClient.blocos.findFirst({
            where: {
                id: Number(id)
            }
        });

        if(!findBloco){
            throw new Error("Condomínio não encontrado!");
        }

        await prismaClient.blocos.update({
            where: {
                id: Number(id)
            },
            data: {
                name: name, 
                condominioId: condominioId, 
                status: status
            }
        });

        return { message: `Bloco [${id}] atualizado com sucesso!`}
    }

    async delete({id}: DeleteBlocoProps) {
        if(!id){
            throw new Error("Solicitação inválida: ID é obrigatório.");
        }

        const findBloco = await prismaClient.blocos.findFirst({
            where: {
                id: Number(id)
            }
        });

        if(!findBloco){
            throw new Error("Condomínio não encontrado!");
        }

        await prismaClient.blocos.delete({
            where: {
                id: Number(id)
            }
        });

        return { message: `Condomínio [${id}] deletado com sucesso!`}
    }
}
export { BlocoService };