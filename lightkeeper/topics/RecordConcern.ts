import { Topic, ListStyle } from "botbuilder-topical";
import {PostConcern} from ".";


class Child extends Topic<any, ConcernSet> {

    resultBehaviors:string[] = [];
    async onStart(resultBehaviors:string[]) {
        await this.send("Are you done adding the concerns?Yes/No");
        this.resultBehaviors = resultBehaviors;
        console.log(this.resultBehaviors);
        await this.next();
        
        
    }

    async next(){
            console.log("Testing");
            if (this.context.activity.text === "Yes"){
                console.log("Right");
                await this.startChild(PostConcern, this.resultBehaviors);
                
            } else if (this.text === "No"){
                return;
            }
        
    }
    async onChildEnd(){
        return this.end();
    }
}
Child.register();
interface ConcernState {
    concerns : string[];
}
interface ConcernSet {
    recordConcerns : string[];
}
export class RecordConcern extends Topic<any, ConcernState> {
    resultBehaviors:string[] = [];
    async onStart(){
        await this.next();
        this.state.concerns = [];
        
    }
    async next() {
        
        await this.send("Please add all your concerns below, each separated by a comma.");
        
    
    }

    /* async next() {
        if (await this.next){
            this.send("Are you done adding the concerns?Yes/No");
        }
        if (this.context.activity.text === "Yes"){
            this.onStart();
        } else {
            this.onDispatch();
        }
    } */


    async onStartChild(){
        await this.startChild(Child, this.state.concerns);
    }

    async onDispatch() {
        if (this.text && this.text !== "Yes" && this.text !== "No"){
            this.state.concerns.push(this.text as string);
            console.log(this.state);
            await this.startChild(Child, this.state.concerns);
        } else if (this.text === "Yes"){
            await this.startChild(Child, this.state.concerns);
        } else if (this.text === "No"){
            await this.next();
        } 
        /*
        if (this.text === "Yes"){
            console.log("Not right");
            //return this.end();
            
        } else if (this.text === "No"){
            await this.next();
           
        } else {
            this.state.concerns.push(this.text as string);
            console.log(this.state);
        }
        */
        
        
        
        /* if (this.context.activity.text === "No"){
            await this.startChild(PostConcern, this.resultBehaviors);
        } */
    }

    async onChildEnd(){
        
        console.log(this.state.concerns);
        return this.end();
        
    }

    
   

 /*    async next(){
        
    }

    async onDispatch() {
        
    }

    async onChildEnd() {
    } */

    
    /* findBehaviors(input: string) {
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

 */
}

RecordConcern.register();


var behaviors = ["bully", "bullying", "violent", "violence", "abuse", "sad", "depressed", "bad grades", "undereating"];
var doneWithBehaviorEntry = ["done", "finished", "move on", "stop", "end"];
