const _     = require('lodash')
const dto   = require('./dto.js')

// TODO: Replace MOCK objects with real objects
const fakes = require('./fakes.js')

const routeMap = {
    'case' : {
        'undefined' : 'GetAllCases',
    },
    'row2' : {
        'key3' : 'input3',
        'key4' : 'input4'
    }
}
module.exports =
{
    Route: function(context, control, controlid, method, methodid)
    { 
        context.log(`Route called controller=${control} controllerid=${controlid} method=${method} methodid=${methodid}`)
        
        // TODO: hard code for now.  need to determine proper method to call based on controller
        var name = routeMap[control][method]

        return this[name](context, arguments) 
    },
    GetConcern: function(context)
    {
        context.log(`Called method GetConcern`)
        _.forEach(arguments, a => {context.log(a)})
    },
    GetAllCases: function(context)
    {
        // TODO: Get actual cases
        var allCases = fakes.cases
        return JSON.stringify(allCases)
    }
}