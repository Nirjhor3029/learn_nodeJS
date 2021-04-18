const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    if (req.url === '/') {
        res.write("Welcome to our home page.");
        res.end();
    }
    else if (req.url === '/about') {
        res.end("Here is our short history");
    }
    //default or when page not found
    else {
        res.end(
            `<h1>Ooops! 404 Not Found </h1>
            <p>We can't seem to find the page you are looking for.</p>
            <a href="/">Back home</a>
            `
        );
    }

});

server.listen(5000); //port