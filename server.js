const express = require('express');
const path = require('path');

const app = express();
const PORT= 3001;
// const apiRoutes = require('./routes/api');
// const htmlRoutes = require('./routes/html');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('api/notes', (req, res) => {
    res.send(path.join(__dirname, 'public/notes.html'));
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${3001}`)
})