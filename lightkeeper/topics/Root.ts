import { Topic } from "botbuilder-topical";
import { RecordConcern } from ".";
//import { Insights } from ".";

export class Root extends Topic {

    async onStart() {
        await this.send("Hi, I'm Lightkeeper, and I'm here to help you help a child. Would you like to profile a student?");
        
    }

    async onDispatch() {
        /**if (await this.dispatchToChild){
            return;
        }**/
        if (this.context.activity.type !== 'message') {
            return;
        }
        if (this.context.activity.text === "yes"){

            await this.startChild(RecordConcern);
        }
        

    }

    async onChildEnd() {
        await this.send(`Please add another concern, or let me know if you are finished.`);
    }
    


}

Root.register();
