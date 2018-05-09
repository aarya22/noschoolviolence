import { Topic } from "botbuilder-topical";
import  asfetch from "node-fetch";

/* export class Insights extends Topic {
    async onStart(concernSet: any) {
        const cs = [concernSet];
        const baseURL = 'http://localhost:1337/insights';
        fetch (baseURL, {
            method: 'GET',
            body: JSON.stringify(body),
            headers: {'Content-Type' : 'application/JSON'},
        }).then( value : Response) => {
            const resArr = [res];
            // for (concern of cs){
            //     for(re of resArr){
            //         if(re === concern){
            //             this.onDispatch(concern);
            //         }else{
            //             return;
            //         }
            //     }
            }
            console.log(res);
        })
        //The code here will check if there are any patterns in concern sets

        //gather every set (sent as an array of JSONS) and send to Dispatch
    }
    //if concern sets match less than 50%, return
            //if concern sets match at least 50%, ask user if the child is also exhibiting these behaviors

    async onDispatch(cb) {
        this.send(`Does ${child} have the following behavioral concern?
        ${cb}.`);

        if(this.context.activity.text === "yes") {
            this.send(`Thank you, I'll add that to the list of concerns`);
            cs.push(cb);
        }else if(this.context.activity.text === "no"){
            this.send(`Okay, I won't add that.`)
        }else{
            this.send(`I don't know what that means. Please answer yes or no`);
        }
        
                //FOR LOOP (probably?) - if the user answers yes, POST the behavior to the student concerns list
                //if user answers no, return
            //if all data is no, send original set,

            //if data has been added, send 
    }

    async onChildEnd(finalConcernSet) {
        this.send(`Are these the behaviors that you've seen in ${child}?
        ${finalConcernSet}`);

        if(this.context.activity.text === "yes") {
            this.send(`Thank you, I'll correlate what you told me to our datasets now.`);
        }else if(this.context.activity.text === "no"){
            this.send(`Okay, Tell me more about ${child}.`)
        }else{
            this.send(`I don't know what that means. Please answer yes or no`);
        }
        //Send all data to the Machine Learning Model
        console.log(finalConcernSet);
    }

} 

Insights.register();
**/
