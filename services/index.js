const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/routes'))

app.listen(3002, () => {
    console.log("server is running on port number ", 3002)
});