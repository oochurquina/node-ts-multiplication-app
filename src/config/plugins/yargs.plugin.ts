import yargs, { number } from "yargs";
import {hideBin} from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    .options('b',{
        alias:'base',
        type: 'number',
        demandOption:true,
        description: 'multiplication table base'
    })
    .options('l',{
        alias:'limit',
        type: 'number',
        default: 10,
        description: 'Multiplication table limit'
    })
    .options('s',{
        alias:'show',
        type:'boolean',
        default: false,
        description: 'Show multiplication table'
    })
    .options('n',{
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        describe: 'File name'
    })
    .options('d',{
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'File destination'
    })
    .check((argv,options)=>{
        // console.log(argv,options)
        if (argv.b<1) throw 'Error: base must be greater than 0'
        return true;
    })

    .parseSync()