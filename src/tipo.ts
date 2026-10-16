export type Prioridade = "baixa" | "media" | "alta";
export type status = "pendente" | "em_andamento" | "concluida";

export interface Tarefa {
  readonly id: number;
  titulo: string;
  descricao?: string;
  prioridade: Prioridade;
  status: status;
  tags: string[];
  criadaEm: Date;
}

export type NovaTarefa = Omit<Tarefa, "id" | "status" | "criadaEm">;