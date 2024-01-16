export interface Funcionarios{
  id? : number;
  nome : string;
  sobrenome : string;
  foto? : File;
  rg : string;
  departamentoId : number;
  ativo : boolean;
}
