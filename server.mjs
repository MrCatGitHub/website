console.log("Mr. Cat's server running on node.js");

import { createServer } from 'node:http';
import { readFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import { extname } from 'node:path';

const hostname = '192.168.178.30';
const port = 80;

const server = createServer(async (req, res) => {
    const url = req.url === '/' ? '/index.html' : req.url;

    if (url === '/test.html') {
        res.statusCode = 423;
        res.setHeader('Content-Type', 'text/plain');
        res.end('423 Locked');
        return;
    } else if (url === '/modern/index.html') {
        res.statusCode = 503;
        res.setHeader('Content-Type', 'text/plain');
        res.end('503 Service Unavailable');
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
        contentType = 'image/webp';
    }

    try {
        await access(filePath, constants.F_OK);
        const data = await readFile(filePath);

        res.statusCode = 200;
        res.setHeader('Content-Type', contentType);
        res.end(data);
    } catch (error) {
        if (ext === '.png' || ext === '.jpg' || ext === '.webp') {
            const placeholderPath = './img/404.png';
            try {
                const placeholderData = await readFile(placeholderPath);
                res.statusCode = 200;
                res.setHeader('Content-Type', contentType);
                res.end(placeholderData);
            } catch (placeholderError) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain');
                res.end('404 Not Found');
            }
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('404 Not Found');
        }
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
