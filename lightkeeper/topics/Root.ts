import { Topic } from "botbuilder-topical";
import { RecordConcern } from ".";
import { Help } from ".";
// import { Insights } from ".";

export class Root extends Topic {

    async onStart() {
        await this.send("Hi, I'm Lightkeeper, and I'm here to help you help a child. Would you like to profile a student?");
        
    }

    async onDispatch() {
        if (this.context.activity.type !== 'message') {
            return;
        }
        if (this.context.activity.text === "yes"){

            await this.startChild(RecordConcern);
        } else if (this.context.activity.text === "no") {
            this.send("Great! there are a few other things I can help you with.");
            await this.startChild(Help);
        }
        await this.dispatchToChild;
    }

    async onChildEnd(child: Help) {
        this.send(`You are back in root.`);
        this.onStart();
    }
    
    async onChildEnd(child: RecordConcern) {
//        await this.startChild(Insights);
        this.onStart();
    }
    
}

Root.register();
