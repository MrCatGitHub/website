console.log("Mr. Cat's server running on node.js");

import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';

const hostname = '192.168.178.30';
const port = 3000;

const server = createServer(async (req, res) => {
    const url = req.url === '/' ? '/index.html' : req.url;

    if (url === '/test.html') {
        res.statusCode = 423;
        res.setHeader('Content-Type', 'text/plain');
        res.end('423 Locked');
        return;
    }

    const filePath = `.${url}`;
    const ext = extname(filePath);

    let contentType = 'text/html';
    if (ext === '.js') {
        contentType = 'application/javascript';
    } else if (ext === '.css') {
        contentType = 'text/css';
    } else if (ext === '.json') {
        contentType = 'application/json';
    } else if (ext === '.png') {
        contentType = 'image/png';
    } else if (ext === '.jpg') {
        contentType = 'image/jpg';
    } else if (ext === '.webp') {
        contentType = 'image/webp'
    }

    try {
        const data = await readFile(filePath);

        res.statusCode = 200;
        res.setHeader('Content-Type', contentType);
        res.end(data);
    } catch (error) {
        try {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('404 Not Found');
        } catch (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('500 Internal Server Error');
        }
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
