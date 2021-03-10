const express = require('express');

const app = express();

app.get('/',(request, response) => {
    const result = [];
    const multiolenumber = 9;

    for(let i = 1; i < 10; i++)
    {
        result.push({
            number: `${multiolenumber}X${i}`,
            multiple: multiolenumber * i,
        });
    }
    response.send(result);
});

app.get('/error', (request, response) => {
    response.status(404).send('404 error');
});

app.listen(4000, () => {
    console.log('Server id running on port 4000');
});