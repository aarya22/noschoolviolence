import { Topic } from "botbuilder-topical";
import { RecordConcern } from ".";
import { Root } from ".";
//import { Insights } from ".";

export class Help extends Topic {

    async onStart() {
        this.help();
        this.end();
    }

    help() {
        this.send("Lightkeeper (that's me!) is here to help you. I have a few different functionalities:");
        this.send("1. Collect behavior patterns from you about a student or child that you are concerned about.");
        this.send("2. After collecting behaviors, I will send your information to our algorithm to determine whether");
        this.send("   this child is going to act out against another child. All recommendations are inferred from ");
        this.send("   behavior trends that I have seen from scientific literature (and other anonymous users).");
        this.send("3. After you enter behaviors, I can tell you what else to look out for that my indicate deteriorating behavior.");
        this.send("4. I can tell you about the algorithm's predictions for any given case.");
        this.send("5. I can show you some resources for interventions.");
    }
    
    async onDispatch() {
        this.help();
        this.end();
    }

}

Help.register();
