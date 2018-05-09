import { Topic } from "botbuilder-topical";

export class RecordConcern extends Topic {
    async onStart() {
        await this.send("Please add all your concerns below, each separated by a comma");
        if (await )
    }

    async onDispatch() {
        
    }

    async onChildEnd() {
    }

}

RecordConcern.register();
