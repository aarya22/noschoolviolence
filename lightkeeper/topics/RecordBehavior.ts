import { Topic } from "botbuilder-topical";

export class RecordBehavior extends Topic {
    async onStart() {
        await this.send("recording behavior...");
        this.end();
    }

    async onDispatch() {
    }

    async onChildEnd() {
    }

}

RecordBehavior.register();