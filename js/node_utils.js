const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
const PORT = 3000;

app.get('/list-directory', (req, res) => {

    // Make sure the dir query parameter was provided
    if (!req.query.dir) {
        res.status(400).send('Error: query parameter "dir" is required');
        return;
    }

    const directoryPath = path.join(__dirname, req.query.dir);

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            res.status(500).send('Error reading directory');
        } else {
            res.json(files);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});