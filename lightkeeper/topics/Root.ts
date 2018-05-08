import { Topic } from "botbuilder-topical";
import { RecordBehavior } from ".";

export class Root extends Topic {

    async onStart() {
        await this.send("Would you like to record a behavior observation or inquire about concerns?");
    }

    async onDispatch() {
        if (await this.dispatchToChild())
            return;

        if (this.text === "record behavior") {
            await this.startChild(RecordBehavior);
        }
    }

    async onChildEnd() {
        await this.send(`Welcome back to the Root!`);
    }
}

Root.register();