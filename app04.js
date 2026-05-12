const express = require('express');
const app = express();


app.get('/page1', (request, response) => {
    response.send('<h1>Hello from Express - Page 01</h1>>');
});
app.get('/page2', (request, response) => {
    response.send('<h1>Hello from Express - Page 02</h1>>');
});
app.get('/', (request, response) => {
    response.send('<h1>Hello from Express</h1>>');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is run at port ${PORT}`);
})