import { Topic } from "botbuilder-topical";

export class RecordConcern extends Topic {
    async onStart() {
        await this.send("recording concern...");
        this.end();
    }

    async onDispatch() {
    }

    async onChildEnd() {
    }

}

RecordConcern.register();