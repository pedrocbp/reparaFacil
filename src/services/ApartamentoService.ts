import prismaClient from "../prisma";

interface CreateApartamentoProps {
    name: string;
    blocoId: number;
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
}
export { ApartamentoService };