const express = require('express');
const app = express();
app.use(express.static('website'));

const port = 3000;

const listening = () => console.log(`Running on localhost: ${port}`);

app.listen(port, listening);