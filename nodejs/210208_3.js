const { request, response } = require('express');
const express = require('express');

const app = express();

app.use((request, response) => {
    const agent = request.header('user-agent');
    const paramname = request.query.name;
    const browserchrome = 'hello chrome';
    const browserothers = 'hello others';

    console.log("header",request.headers);
    console.log("host",request.hostname);
    console.log("protocol", request.protocol);

    if(agent.toLowerCase().match(/chrome/)) {
        response.write(`<div><p>${browserchrome}</p></div>`);
    }
    else{
        response.write(`<div><p>${browserothers}</p></div>`);
    }
    response.write(`<div><p>${agent}</p></div>`);
    response.write(`<div><p>${paramname}</p></div>`);
    response.end();
});

app.listen(3000, () => {
    console.log('Server id running on port 3000');
});