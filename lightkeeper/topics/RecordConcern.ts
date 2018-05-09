import { Topic } from "botbuilder-topical";

export class RecordConcern extends Topic {
    async onStart() {
        await this.send("Great! Tell me about your concerns.");
        this.end();
    }

    async onDispatch() {
    }

    async onChildEnd() {
    }

}

RecordConcern.register();
