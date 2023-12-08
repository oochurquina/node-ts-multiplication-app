import fs from 'fs';

export interface Options{
    fileContent: string;
    fileDestination?: string;
    fileName?  : string;
}
export interface SaveFileUseCase{
    execute: (options: Options)=>boolean;
}

export class SaveFile {
    constructor() {}

    execute({fileContent,fileDestination ='outputs',fileName='table'}: Options):boolean{
        try {
            fs.mkdirSync(fileDestination,{recursive: true});
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`,fileContent);
            return true;
        }
        // if (showTable)console.log(outputMessage);
        catch (error) {
            console.log(error);
            return false;
        }
    }
}