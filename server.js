const express = require('express');
const path = require('path');

const app = express();
const port = 9090;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Catch all route to serve 404 page
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
