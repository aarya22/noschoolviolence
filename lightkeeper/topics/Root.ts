import { Topic } from "botbuilder-topical";
import { RecordConcern } from ".";
import { Help } from ".";
import { Insights } from ".";

export class Root extends Topic {

    async onStart() {
        await this.send("Hi, I'm Lightkeeper, and I'm here to help you help a child. Would you like to profile a student?");
        
    }

    async onDispatch() {
        // needed to prevent events from triggering user-targeted output. 
        if (this.context.activity.type !== 'message') {
            return;
        } else {
            if (this.context.activity.text === "yes"){
                await this.startChild(RecordConcern);
            } else if (this.context.activity.text === "no") {
                this.send("Great! there are a few other things I can help you with.");
                await this.startChild(Help);
            }
            await this.dispatchToChild;
        }
    }

    async onChildEnd(child: Topic) {
        if (child instanceof Help) {
            this.onStart();
        } else if (child instanceof RecordConcern) {
            await this.startChild(Insights);
        } else {
            this.onStart();
        }
    }
    
}

Root.register();
