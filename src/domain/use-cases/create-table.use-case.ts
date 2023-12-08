
export interface CreateTableCase{
    execute: (options: CreateTableOptions)=>string;
}
export interface CreateTableOptions{
    base: number;
    limit: number;
}
export class CreateTable implements CreateTableCase {
    constructor() {}
    execute({base,limit=10}:CreateTableOptions){
        let outputMessage:string='';
        for (let index = 0; index <= limit; index++) {
            outputMessage += `${base} x ${index} = ${base*index}\n`
        }
        return outputMessage;
    }
}