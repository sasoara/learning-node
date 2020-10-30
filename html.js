// Contains the function for creating the server
const http = require('http');
// Defines the host to which the server is bound
const host = 'localhost';
// Defines the port to which the server is bound
const port = 8000;
// Handle the request and give the response
const requestListener = function (req, res) { };
// Creates the server
const server = http.createServer(requestListener);
// Bind the server to a network address and listen.
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

