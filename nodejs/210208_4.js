const { request, response } = require('express');
const express = require('express');

const app = express();

app.use((request,response,next) =>{
    console.log('1. 미들웨어 요청');
    request.user1 = '철수';
    next();
});

app.use((request,response,next) => {
    console.log('2. 미들웨어 요청');
    request.user2 = '영이';
    next();
});

app.use((request, response, next) =>{
    console.log('3. 미들웨어 요청');
    response.writeHead('200', {'Content-Type':'text/html;charset=utf8'});

    response.write(`<div><p> ${request.user1} </p></div>`);
    response.write(`<div><p> ${request.user2} </p></div>`);
    response.end(`<h1> Express 서버에서 응답한 결과 </h1>`);
});

app.listen(3000, () => {
    console.log('Server id running on port 3000');
});