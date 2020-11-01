// Contains the function for creating the server
const http = require('http');
// Defines the host to which the server is bound
const host = 'localhost';
// Defines the port to which the server is bound
const port = 8000;
// Handle the request and give the response
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment;filename=books.csv");
    res.writeHead(200);
    res.end(`id,name,author\n1,Alice im Quantenland,Robert Gilmore`);
};
// Creates the server
const server = http.createServer(requestListener);
// Bind the server to a network address and listen.
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

