const controller = require('./util/controller.js')

module.exports = function (context, req) {

    var control     = context.bindingData.controller;
    var controlid   = context.bindingData.controllerid;
    var method      = context.bindingData.method;
    var methodid    = context.bindingData.methodid;

    var retval = controller.Route(context, control, controlid, method, methodid);

    context.log(`retval = ${retval}`)

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: `controller=${control} controllerid=${controlid} method=${method} methodid=${methodid}`
    };

    context.done();
};