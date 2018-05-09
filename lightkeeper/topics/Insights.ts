import { Topic } from "botbuilder-topical";
import { fetch } from "node-fetch";

export class Insights extends Topic {
    async onStart(concernSet) {
        const baseURL = 'http://localhost:1337/insights';
        fetch (baseURL, {
            method: 'GET',
            body: JSON.stringify(body),
            headers: {'Content-Type' : 'application/JSON'},
        }).then( res => {
            console.log(res);
        })
        //The code here will check if there are any patterns in concern sets

        //gather every set (sent as an array of JSONS) and send to Dispatch
    }
    //if concern sets match less than 50%, return
            //if concern sets match at least 50%, ask user if the child is also exhibiting these behaviors

    async onDispatch(concernBehavior) {
        
                //FOR LOOP (probably?) - if the user answers yes, POST the behavior to the student concerns list
                //if user answers no, return
            //if all data is no, send original set,

            //if data has been added, send 
    }

    async onChildEnd(finalConcernSet) {
        //Send all data to the Machine Learning Model
        console.log(finalConcernSet);
    }

}

Insights.register();
