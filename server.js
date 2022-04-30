const express = require('express');
const path = require('path');

const app = express();
const PORT= 3005;
// const apiRoutes = require('./routes/api');
// const htmlRoutes = require('./routes/html');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
})


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`)
})