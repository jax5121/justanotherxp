const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    // loading the homepage
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((req, res) => {
    res.status(404).send("<h1>404 - Page not found</h1>"); // replace this with a page for not found
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});