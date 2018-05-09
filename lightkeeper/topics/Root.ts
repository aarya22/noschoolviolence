import { Topic } from "botbuilder-topical";
import { RecordConcern } from ".";

export class Root extends Topic {

    async onStart() {
        await this.send("Hi, I'm Lightkeeper, and I'm here to help you help a child. Would you like to profile a student?");
    }

    async onDispatch() {
        if (await this.dispatchToChild()) {
            return;
        } else {
            var input: string = `${this.text}`;
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
        await this.send(`Welcome back to the Root!`);
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
}

Root.register();

var behaviors = ["bully", "bullying", "violent", "violence", "abuse", "sad", "depressed", "bad grades", "undereating"];
