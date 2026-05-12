const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/page1', (request, response) => {
    response.send(`
        <form method="POST" action="/page2">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Your name" required autofocus>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Your email" required autofocus>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    `)
});

app.post('/page2', (request, response) => {
    const name = request.body.name;
    const email = request.body.email;
    
    response.send(`
        <h1>Hello from Express - Page 02</h1>
        <p>Name: <b>${name}</b></p>
        <p>Email: <b>${email}</b></p>`);
});

app.get('/', (request, response) => {
    response.send(`<h1>Hello from Express</h1>>`);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is run at port ${PORT}`);
})