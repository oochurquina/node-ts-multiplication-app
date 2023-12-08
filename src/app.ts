// console.log(process.argv);
// const [tsnode,app,...args]= process.argv;

import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";

// console.log(args)
// console.log(yarg.b)

(async()=>{
    await main();
})()

async function main() {
  const {b: base,l:limit,s:showTable,n: name, d: destination}= yarg;  
  ServerApp.run({base,limit,showTable,name,destination});
}