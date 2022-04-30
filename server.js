const express = require('express');
const path = require('path');
const note = require('./db/db.json');
const fs = require('fs');



const app = express();
const PORT= process.env.PORT || 3001
// const apiRoutes = require('./routes/api');
// const htmlRoutes = require('./routes/html');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    res.json(note);
})

app.post('/api/notes', (req, res) => {
    note.push(req.body)
    fs.writeFileSync(path.join(__dirname, './db/db.json'),
    JSON.stringify(note, null, 2))
    res.json(note);
})

  

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})