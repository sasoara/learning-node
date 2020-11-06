// Contains the function for creating the server
const http2 = require('http2');
// To read files
const fs = require('fs');
// Defines the host to which the server is bound
const host = 'localhost';
// Defines the port to which the server is bound
const port = 9443;

const server = http2.createSecureServer({
    cert: fs.readFileSync("./ssl/server.crt"),
    key: fs.readFileSync("./ssl/server.key"),
    ca: fs.readFileSync("./ssl/rootCA.crt")
});
// Bind the server to a network address and listen.
server.on("stream", (stream, headers) => {
    stream.respond({
        "Content-Type": "text/plain",
        "status": 200
    });
    stream.end("My first secure http2 server!");
});

server.listen(port);
console.log(`Server is running on https://${host}:${port}`);
