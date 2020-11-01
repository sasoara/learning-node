// Contains the function for creating the server
const http = require('http');
// Defines the host to which the server is bound
const host = 'localhost';
// Defines the port to which the server is bound
const port = 8000;
// JSON Data
const books = JSON.stringify([
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
]);
const authors = JSON.stringify([
    { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
    { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 }
]);

// Handle the request and give the response
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case '/authors':
            res.writeHead(200);
            res.end(authors);
            break;
        case '/books':
            res.writeHead(200);
            res.end(books);
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Resource not found" }));
            break;
    }

};
// Creates the server
const server = http.createServer(requestListener);
// Bind the server to a network address and listen.
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

