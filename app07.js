const express = require('express');
const app = express();
const router = require('./routes/route07');

app.set('view engine', 'ejs');
app.use(router);


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is run at port ${PORT}`);
})