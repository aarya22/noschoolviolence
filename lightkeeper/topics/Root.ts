import { Topic } from "botbuilder-topical";
import { RecordConcern } from ".";

export class Root extends Topic {

    async onStart() {
        await this.send("Would you like to record a concern or inquire about concerns?");
    }

    async onDispatch() {
        if (await this.dispatchToChild())
            return;

        if (this.text === "record concern") {
            await this.startChild(RecordConcern);
        }
    }

    async onChildEnd() {
        await this.send(`Welcome back to the Root!`);
    }
}

Root.register();