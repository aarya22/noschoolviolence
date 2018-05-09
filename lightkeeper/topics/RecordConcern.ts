import { Topic } from "botbuilder-topical";

export class RecordConcern extends Topic {
    async onStart() {
        await this.send("The concerning behavior has been added to my profile for this session. Feel free to keep adding concerns.");
        this.end();
    }

    async onDispatch() {
    }

    async onChildEnd() {
    }

}

RecordConcern.register();
