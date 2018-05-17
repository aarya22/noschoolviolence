import { Topic } from "botbuilder-topical";

export class PostConcern extends Topic {
    async onStart(result:string[]){
        
        console.log(result);
        console.log("DONE");
        return this.end();
        
    }
}

PostConcern.register();