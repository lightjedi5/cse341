const fs = require('fs');

const requestHandler = (request, response) => {
    const url = request.url
    const method = request.method
    if(url === '/'){
        response.write('<html>');
        response.write('<head><title>Enter Message</title></head>');
        response.write('<body><form action="/message" method="POST"><input type="text" placeholder="enter text" name="message"><button type="submit">submit</button></form></body>');
        response.write('</html.');
        return response.end();
    }
    if (url === '/message' && method === 'POST'){
        const body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
        });
        request.on('end', () => {
            const parseBody = Buffer.concat(body).toString()
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt', message, (error) => {
                response.statusCode = 302;
                response.setHeader('Location', '/');
                return response.end();
            });

        });
    }
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>XCOM</title></head>');
    response.write('<body>Hello World!</body>');
    response.write('</html.');
    response.end();
};

module.exports = requestHandler