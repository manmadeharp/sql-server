const express = require('express');

const app = express();

const routes = require('./routes')

app.use('/', routes);

app.listen(process.env.PORT || 3005, () =>{
    console.log('server is listening')
})