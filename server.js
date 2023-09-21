const Hapi = require("@hapi/hapi")
const Inert = require("@hapi/inert")
const resolve = require("path").resolve

console.log(__dirname)
async function init() {
    const ALL_INTERFACES = "0.0.0.0"
    const PORT = 3000
    const server = Hapi.server({
      port: PORT,
      host: ALL_INTERFACES,
    })
  
    await server.register(Inert)
  
    server.route({
      method: "GET",
      path: "/{param*}",
      options: { cors: { origin: ["*"] } },
      handler: {
        directory: {
          path: resolve(__dirname, "demo"),
          index: "index.html",
        },
      },
    })
    
    await server.start()
    console.log("Server Online at localhost:3000")
}

init();