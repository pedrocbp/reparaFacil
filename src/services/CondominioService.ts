import prismaClient from "../prisma";

interface CreateCondominioProps{
    name: string;
    bairro: string;
    rua: string;
    numero: string;
    cep: string;
    cidade: string;
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
}
export { CondominioService };