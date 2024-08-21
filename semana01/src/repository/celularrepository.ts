export type Celular={
    tamanhoTela: number;
    marca: string;
    cor: string;

}
export function cadastraCelular(parametros: Celular){
    parametros.cor
    parametros.marca
    parametros.tamanhoTela
    console.log("CELULAR CADASTRADO NO BANCO DE DADOS...")
    console.log(parametros);
}