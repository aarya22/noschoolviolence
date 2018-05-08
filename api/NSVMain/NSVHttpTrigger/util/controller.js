const _ = require('lodash')

module.exports =
{
    Route: function(context, control, controlid, method, methodid)
    { 
        context.log(`Route called controller=${control} controllerid=${controlid} method=${method} methodid=${methodid}`)
        
        // hard code for now.  need to determine proper method to call based on controller
        var name = 'GetConcern'

        this[name](context, arguments) 
    },
    GetConcern: function(context)
    {
        context.log(`Called method GetConcern`)
        _.forEach(arguments, a => {context.log(a)})
    }
}