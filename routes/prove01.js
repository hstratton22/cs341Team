//const path = require('path');
const express = require('express');
//const fs = require('fs');
const router = express.Router();

router.get('/', (req, res, next) => {
    //res.send('<html><body><form action="/message" method="POST"><input type="text" name="input1"><input type="text" name="input2"><button type="submit">Submit</button></form></body></html>');
    //?res.render('form', {title:'form input'});
    //res.sendFile(path.join(__dirname, '..', 'views','pages', 'form.ejs'));
    res.render('pages/form', {title: 'First page', path: '/form'});


});
router.post('/output', (req, res, next) => {
    //res.redirect('/');
   const body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    });
    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        //const newInput1 = parsedBody.split('=')[1];
        //const newInput2 = parsedBody.split('=')[3];
        //console.log(newInput1);

        //res.writeHead(302, {'Location': ' '});
        res.redirect('/output', {title: "input response" , path: '/output'})
        res.end();
/* 
        res.sendFile(path.join(__dirname, '..', 'views','pages', 'output.ejs'));
        
*/
});
});

/*
if (url === '/message' && method ==="POST"){
    const body =[];
    req.on('data', (chunk) => {//event listener for buffer chunk
        body.push(chunk);
    });
    req.on('end, () =>{
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        fs.writeFile('message.txt', message, err => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    });
}
}

*/
module.exports = router;
