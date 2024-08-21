


import { Celular, cadastraCelular } from './celularrepository'

export type Pessoa = {
    nome: string,
    cpf: string,
    dataDeNascimento: string,
    contatos:{
        telefones: string[],
        emails: string[]
    },
    celular: Celular
}

export function cadastrarPessoa(parametros:Pessoa){
    console.log("pessoa cadastrada")
    console.log(parametros);
}

