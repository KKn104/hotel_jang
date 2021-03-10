const express = require('express');

const app = express();

app.get('/',(request, response) => {

    
        setTimeout(function () {
            throw new Error('We crashed!!!!!');
        }, 10);
    
    response.send('HELLO EXPRESS MODULE');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});