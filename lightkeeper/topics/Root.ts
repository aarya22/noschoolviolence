import { Topic } from "botbuilder-topical";
import { RecordConcern } from ".";
import { Insights } from ".";

export class Root extends Topic {

    async onStart() {
        await this.send("Hi, I'm Lightkeeper, and I'm here to help you help a child. Would you like to profile a student?");
    }

    async onDispatch() {
        var input: string = `${this.text}`;
        if (await this.dispatchToChild()) {
            return;
        } else if (this.endBehaviorEntry(input) == true) {
            await this.send("It looks like you are done adding traits for this student -- thanks!");
        } else {
            this.send(`You entered ${input}`);
            if (this.findBehaviors(input) == true) {
                this.send("Great! I'm adding this behavior to your list.");
                await this.startChild(RecordConcern);
            } else {
                this.send("That behavior isn't part of our standard set of problematic behaviors, but I will add it to the list.");
                await this.startChild(RecordConcern);
            }
        }
    }

    async onChildEnd() {
        await this.send(`Please add another concern, or let me know if you are finished.`);
    }
    
    findBehaviors(input: string) {
        var i;
        this.send(`Checking our index of ${behaviors.length - 1} behaviors`);
        for (i = 0; i < behaviors.length; i++) {
            if (input.includes(behaviors[i])) {
                return true;
            }
        }
        return false;
    }
    
    endBehaviorEntry(input: string) {
        var i;
        for (i = 0; i < doneWithBehaviorEntry.length; i++) {
            if (input.includes(doneWithBehaviorEntry[i])) {
                return true;
            }
        }
        return false;
    }


}

Root.register();

var behaviors = ["bully", "bullying", "violent", "violence", "abuse", "sad", "depressed", "bad grades", "undereating"];
var doneWithBehaviorEntry = ["done", "finished", "move on", "stop", "end"];
