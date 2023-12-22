const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Here is your main website");
    } else if (req.url === '/about') {
        res.end("Here is our short story");
    } else {
        res.end(`
            <h1>Oops!!!!</h1>
            <p>Can't seem to find the page you are looking for.</p>
            <a href='/'>Back Home</a>
        `);
    }
});

server.listen(3000, "localhost", () => {
    console.log("The server has started on port 3000");
});
