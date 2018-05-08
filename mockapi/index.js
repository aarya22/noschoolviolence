const jsonServer = require('json-server')
const server = jsonServer.create()
server.use(jsonServer.defaults())
server.use(jsonServer.rewriter({'/api/*': '/$1'}))
server.use(jsonServer.router("data.json"))

server.listen(1337, () => {
    console.log('JSON Server is running on port 1337')
})