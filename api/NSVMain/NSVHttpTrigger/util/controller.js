const _ = require('lodash')

module.exports =
{
    Route: function(context, name)
    { 
        context.log(`Calling method ${name}`)
        this[name](context, arguments) 
    },
    GetConcern: function(context)
    {
        context.log(`Called method GetConcern`)
        _.forEach(arguments, a => {context.log(a)})
    }
}