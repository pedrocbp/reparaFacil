import prismaClient from "../prisma";

interface DeleteCustomerProps{
    id: string;

}

class DeleteCustomerService {
    async execute({ id }: DeleteCustomerProps){

        if(!id){
            throw new Error('Solicitação inválida');
        }
        const findCustomer = await prismaClient.users.findFirst({
            where: {
                id: id
            }
        })

        if(!findCustomer){
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
export { DeleteCustomerService }