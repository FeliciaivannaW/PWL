const express = require('express');
const app = express();
const router = require('./routes/route06');

app.use(router);


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is run at port ${PORT}`);
})