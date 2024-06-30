console.log("Mr. Cat's server running on node.js"); 

import { createServer } from 'node:http';
import { readFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import { extname } from 'node:path';

const hostname = // Insert your ip here. it should look like this: '123.456.789.00';
const port = 80;

const nodeJsVer = 'v20.15.0'; // Replace with your Node.js version

const server = createServer(async (req, res) => {
    const url = req.url === '/' ? '/index.html' : req.url;

    if (url === '/test.html' || url === '/script.js') {
        res.statusCode = 423;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`423 Locked\nNode.js version: ${nodeJsVer}`);
        return;
    } else if (url.startsWith('/modern')) {
        res.statusCode = 503;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`503 Service Unavailable\nNode.js version: ${nodeJsVer}`);
        return;
    }

    const filePath = `.${url}`;
    const ext = extname(filePath);

    let contentType = '';
    switch (ext) {
        case '.html':
            contentType = 'text/html';
            break;
        case '.js':
            contentType = 'application/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
        case '.jpeg':
            contentType = 'image/jpeg';
            break;
        case '.gif':
            contentType = 'image/gif';
            break;
        case '.webp':
            contentType = 'image/webp';
            break;
        case '.svg':
            contentType = 'image/svg+xml';
            break;
        default:
            res.statusCode = 415;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`415 Unsupported Media Type\nNode.js version: ${nodeJsVer}\n`);
            return;
    }

    try {
        await access(filePath, constants.F_OK);
        const data = await readFile(filePath);

        res.statusCode = 200;
        res.setHeader('Content-Type', contentType);
        res.end(data);
    } catch (error) {
        if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif' || ext === '.webp' || ext === '.svg') {
            const placeholderPath = './img/404.png';
            try {
                const placeholderData = await readFile(placeholderPath);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'image/png'); // Assume placeholder is PNG
                res.end(placeholderData);
            } catch (placeholderError) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain');
                res.end(`404 Not Found\nNode.js version: ${nodeJsVer}\n`);
            }
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`404 Not Found\nNode.js version: ${nodeJsVer}\n`);
        }
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/ under Node.js version: ${nodeJsVer}`);
});