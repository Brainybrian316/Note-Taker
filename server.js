const express = require('express');

const app = express();

const PORT= 3001;

app.get('/', (res, req) => {
    res.send('Hello World');
    console.log('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${3001}`)
})