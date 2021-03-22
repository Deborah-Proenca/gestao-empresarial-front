import { Funcionario } from "../funcionarios/funcionario.interface";

export interface Empresa{

    id?: number;
    razaoSocial: string;
    nomeFantasia: string;
    quantidadeFuncionario: number;
    situacao: boolean;
    funcionarios: Funcionario[]
}