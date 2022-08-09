const {serverPort} = require('./config/config.server')

const express = require('express');

const app = express();

app.listen(serverPort, () => {
    console.log('Running', serverPort);
})