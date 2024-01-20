const express = require('express');
const cors = require('cors');
const path = require('path');
const https = require('https');
const fs = require('fs');
const app = express();
const PORT = 40000;

app.use(cors());

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/magmaguy.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/magmaguy.com/fullchain.pem')
};

// Recursive function that lists all markdown files (.md) in a directory
async function getAllMarkdownFiles(directoryPath, relativePath = '') {
    let files = await fs.promises.readdir(directoryPath);
    let markdownFiles = [];

    for (let file of files) {
        let absolutePath = path.join(directoryPath, file);
        let newRelativePath = path.join(relativePath, file);
        let fileStat = await fs.promises.stat(absolutePath);
        if (fileStat.isDirectory()) {
            let subDirFiles = await getAllMarkdownFiles(absolutePath, newRelativePath);
            markdownFiles = markdownFiles.concat(subDirFiles);
        } else {
            // Checking if file is a markdown file
            if(path.extname(file) === '.md'){
                markdownFiles.push(path.join('wiki', newRelativePath));
            }
        }
    }
    return markdownFiles;
}

app.get('/all-markdown-files', async (req, res) => {
    const directoryPath = path.join(__dirname, '../wiki/');
    try {
        const allMarkdownFiles = await getAllMarkdownFiles(directoryPath);
        res.json(allMarkdownFiles);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Listen for incoming requests on the defined port
https.createServer(options, app).listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const COUNTER_FILENAME = path.join(__dirname, 'PageViewCounter.txt');

let pageViews;

async function initializeOrReadCounterFile() {
    try {
        return Number(fs.readFileSync(COUNTER_FILENAME, 'utf8'));
    } catch (e) {
        if (e.code === 'ENOENT') {
            fs.writeFileSync(COUNTER_FILENAME, '0');
            return 0;
        }
        throw e;
    }
}

async function updatePageViews() {
    pageViews += 1;
    fs.writeFileSync(COUNTER_FILENAME, String(pageViews));
    return pageViews;
}

app.get('/increment-page-view-counter', async (req, res) => {
    try {
        const currentCount = await updatePageViews();
        if (currentCount%10 === 0) console.log("Global counter: " + currentCount)
        res.json({ count: currentCount });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

initializeOrReadCounterFile().then(count => pageViews = count);