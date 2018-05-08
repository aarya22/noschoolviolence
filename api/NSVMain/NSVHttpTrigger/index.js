const controller = require('./util/controller.js')

module.exports = function (context, req) {

    var control = context.bindingData.controller;
    var method  = context.bindingData.method;
    var id      = context.bindingData.id;

    controller.Route(context, method, id);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: `controller=${control} method=${method} id=${id}`
    };

    context.done();
};