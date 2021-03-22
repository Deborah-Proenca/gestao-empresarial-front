import { Empresa } from "../empresas/empresa.interface";

export interface Funcionario{

    id?: number;
    nomeCompleto: string;
    cpf: string;
    cargo: string;
    empresa: Empresa
}