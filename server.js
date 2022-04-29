const express = require('express');

const app = express();
const PORT= 3001;
// const apiRoutes = require('./routes/api');
// const htmlRoutes = require('./routes/html');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


app.get('/', (res, req) => {
    res.send('Hello World');
 
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${3001}`)
})