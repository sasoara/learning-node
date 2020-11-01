// Contains the function for creating the server
const http = require('http');
// Defines the host to which the server is bound
const host = 'localhost';
// Defines the port to which the server is bound
const port = 8000;
// Handle the request and give the response
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<html><body><h1>This is HTML</h1></body></html>`);
};
// Creates the server
const server = http.createServer(requestListener);
// Bind the server to a network address and listen.
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

