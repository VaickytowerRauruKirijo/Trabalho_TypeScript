import type { Tarefa } from './tipo';

export const tarefas: Tarefa[] = [

    {id: 1, titulo: "Estudar interfaces", prioridade: "alta", status: "pendente", tags: ["estudo"], criadaEm: new Date()},
    {id: 2, titulo: "Praticar TypeScript", prioridade: "media", status: "em_andamento", tags: ["estudo"], criadaEm: new Date()},
    {id: 3, titulo: "Revisar Documentação", prioridade: "baixa", status: "pendente", tags: ["estudo"], criadaEm: new Date()},
    {id: 4, titulo: "Atualizar Dependências", prioridade: "media", status: "em_andamento", tags: ["desenvolvimento"], criadaEm: new Date()},
    {id: 5, titulo: "Escrever Testes", prioridade: "alta", status: "pendente", tags: ["desenvolvimento"], criadaEm: new Date()},
]