import { ConsoleAdapter } from "botbuilder";

new ConsoleAdapter().listen(ctx => {
    
    if (ctx.activity.type === 'message') 
        ctx.sendActivity(`hi, I'm lightkeeper`);
})
