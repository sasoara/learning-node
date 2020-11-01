// Contains the function for creating the server
const http = require('http');
// Contains the async functions
const fs = require('fs/promises');
/* const fs = require('fs').promises; */
// Defines the host to which the server is bound
const host = 'localhost';
// Defines the port to which the server is bound
const port = 8000;
// The content of this file should be output
let indexFile;
// Creates the server
const server = http.createServer(requestListener);

// Handle the request and give the response
const requestListener = function (req, res) {
    // Variable __dirname shows the absolute path
    fs.readFile(__dirname + "/index.html")
        // Return the HTML page as soon as it has loads:
        .then(contents => {
            // The file is loaded before the server runs.
            indexFile = contents;
            // Bind the server to a network address and listen.
            server.listen(port, host, () => {
                console.log(`Server is running on http://${host}:${port}`);
            });
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(indexFile);
        })
        .catch(err => {
            // If the file cannot be loaded, capture the error and report it to the console.
            console.error(`Could not read index.html file: ${err}`);
            process.exit(1);
        });
};

