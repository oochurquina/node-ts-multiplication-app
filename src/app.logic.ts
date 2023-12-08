import fs from 'fs'
import { yarg } from './config/plugins/yargs.plugin';
const {b:base,l:limit,s:showTable}= yarg;

const header = `
========================
    Tabla del ${base}
========================
`;
let outputMessage: string ='';
const path: string='outputs'
for (let index = 0; index <= limit; index++) {
    outputMessage += `${base} x ${index} = ${base*index}\n`
}

outputMessage = header + outputMessage;
fs.mkdirSync(path,{recursive: true});
fs.writeFileSync(`${path}/tabla-${base}.txt`,outputMessage);
if (showTable)console.log(outputMessage);
console.log('File created!!!');