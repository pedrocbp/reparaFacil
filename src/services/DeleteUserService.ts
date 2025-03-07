import prismaClient from "../prisma";

interface DeleteUserProps{
    id: number;

}

class DeleteUserService {
    async execute({ id }: DeleteUserProps){

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
export { DeleteUserService }