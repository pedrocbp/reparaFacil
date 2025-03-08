import prismaClient from "../prisma";

interface CreateCondominioProps{
    name: string;
    bairro: string;
    rua: string;
    numero: string;
    cep: string;
    cidade: string;
}

interface UpdateCondominioProps{
    id: number;
    name?: string;
    bairro?: string;
    rua?: string;
    numero?: string;
    cep?: string;
    cidade?: string;
    status?: boolean;
}

interface DeleteCondominioProps{
    id: number;
}


class CondominioService {
    async create({name, bairro, rua, numero, cep, cidade}: CreateCondominioProps) {
        if (!name || !bairro || !rua || !numero || !cep || !cidade ) {
            throw new Error("Preencha todos os campos");
        }

        const condominio = await prismaClient.condominios.create({
            data:{
                name, 
                bairro, 
                rua, 
                numero, 
                cep, 
                cidade
            }
        })
        return condominio;
    }

    async list() {
        const condominios = await prismaClient.condominios.findMany();
        return condominios;
    }

    async update({id, name, bairro, rua, numero, cep, cidade, status}: UpdateCondominioProps) {
        if(!id){
            throw new Error("Solicitação inválida: ID é obrigatório.");
        }

        const findCondominio = await prismaClient.condominios.findFirst({
            where: {
                id: Number(id)
            }
        });

        if(!findCondominio){
            throw new Error("Condomínio não encontrado!");
        }

        await prismaClient.condominios.update({
            where: {
                id: Number(id)
            },
            data: {
                name: name,
                bairro: bairro,
                rua: rua,
                numero: numero,
                cep: cep,
                cidade: cidade,
                status: status
            }
        });

        return { message: `Condomínio [${id}] atualizado com sucesso!`}
    }

    async delete({id}: DeleteCondominioProps) {
        if(!id){
            throw new Error("Solicitação inválida: ID é obrigatório.");
        }

        const findCondominio = await prismaClient.condominios.findFirst({
            where: {
                id: Number(id)
            }
        });

        if(!findCondominio){
            throw new Error("Condomínio não encontrado!");
        }

        await prismaClient.condominios.delete({
            where: {
                id: Number(id)
            }
        });

        return { message: `Condomínio [${id}] deletado com sucesso!`}
    }

}
export { CondominioService };