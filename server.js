const http = require("http");
function webSite(req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("My first server");
}
let server = http.createServer(webSite);

server.listen(3005, "127.0.0.1")

console.log("server corriendo en el puerto 3005")