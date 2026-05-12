const express = require('express')
const path = require('path');
const { route } = require('./route06');
const router = express.Router()

router.use(express.urlencoded({ extended: false }));

// router.get('/form', (request, response) => {
//     response.status(200).sendFile(path.join(__dirname, '../views', 'forms.html'));
// });
// buat d ejs
router.get('/form', (request, response) => {
    response.status(200).render('forms');
});

// router.post('/page2', (request, response) => {
//     const name = request.body.name;
//     const email = request.body.email;
    
//     response.send(`
//         <h1>Hello from Express - Page 02</h1>
//         <p>Name: <b>${name}</b></p>
//         <p>Email: <b>${email}</b></p>
//         <a href="/page1">back to Form</a>
//         `);
// });
router.post('/page2', (request, response) => {
    const name = request.body.name;
    const email = request.body.email;
    response.status(200).render('page2', {name, email});
});

// router.get('/', (request, response) => {
//     response.status(200).sendFile(path.join(__dirname, '../views', 'index.html'));
// });
// d ejs
router.get('/', (request, response) => {
    response.status(200).render('index');
});
module.exports = router;