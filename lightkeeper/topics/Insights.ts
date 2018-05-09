import { Topic } from "botbuilder-topical";
import * as fetch from "node-fetch";

export class Insights extends Topic {
    async onStart(args: string[]) {
        const cs = [args];
        console.log(args);
        const baseURL: string = 'https://swapi.co/api/species/1/';
        fetch.default (baseURL)
            .then( res => res.text() ) //get the text
            .then( text => JSON.parse(text) ) //parse it
            .then( o => ({name:o.name, classification:o.classification, designation:o.designation, averageHeight:o.average_height, lifespan:o.average_lifespan}))
            .then( o => console.log(o))
    }
        //The code here will check if there are any patterns in concern sets

        //gather every set (sent as an array of JSONS) and send to Dispatch
    }
    //if concern sets match less than 50%, return
            //if concern sets match at least 50%, ask user if the child is also exhibiting these behaviors

//     async onDispatch(cb) {
//         this.send(`Does ${child} have the following behavioral concern?
//         ${cb}.`);

//         if(this.context.activity.text === "yes") {
//             this.send(`Thank you, I'll add that to the list of concerns`);
//             cs.push(cb);
//         }else if(this.context.activity.text === "no"){
//             this.send(`Okay, I won't add that.`)
//         }else{
//             this.send(`I don't know what that means. Please answer yes or no`);
//         }
        
//                 //FOR LOOP (probably?) - if the user answers yes, POST the behavior to the student concerns list
//                 //if user answers no, return
//             //if all data is no, send original set,

//             //if data has been added, send 
//     }

//     async onChildEnd(finalConcernSet) {
//         this.send(`Are these the behaviors that you've seen in ${child}?
//         ${finalConcernSet}`);

//         if(this.context.activity.text === "yes") {
//             this.send(`Thank you, I'll correlate what you told me to our datasets now.`);
//         }else if(this.context.activity.text === "no"){
//             this.send(`Okay, Tell me more about ${child}.`)
//         }else{
//             this.send(`I don't know what that means. Please answer yes or no`);
//         }
//         //Send all data to the Machine Learning Model
//         console.log(finalConcernSet);
//     }

// }

Insights.register();
