const express = require('express');
const app = express();
const port = 8000;

// MIME types for Godot files
app.use((req, res, next) => {
    if (req.url.endsWith('.pck')) {
        res.setHeader('Content-Type', 'application/octet-stream');
    } else if (req.url.endsWith('.wasm')) {
        res.setHeader('Content-Type', 'application/wasm');
    }
    next();
});

// Enable CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    next();
});

// Serve static files
app.use(express.static('.'));

app.listen(port, () => {
    console.log(`Dev server running at http://localhost:${port}`);
});
