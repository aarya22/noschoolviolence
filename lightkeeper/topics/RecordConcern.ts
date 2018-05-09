import { Topic } from "botbuilder-topical";

export class RecordConcern extends Topic {
    async onStart() {
        await this.send("Please add all your concerns below, each separated by a comma.")
        
        

    }

    async onDispatch() {
        
        var input: string = `${this.text}`;
        if (this.endBehaviorEntry(input) == true) {
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

RecordConcern.register();

var behaviors = ["bullying", "violent", "depressed", "sad", "angry"]
var doneWithBehaviorEntry = ["all done", "done", "end", "stop"]

var behaviors = ["bully", "bullying", "violent", "violence", "abuse", "sad", "depressed", "bad grades", "undereating"];
var doneWithBehaviorEntry = ["done", "finished", "move on", "stop", "end"];
