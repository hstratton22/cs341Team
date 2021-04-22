//const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false}));

router.get('/', (req, res, next) => {
    //res.send('<html><body><form action="/message" method="POST"><input type="text" name="input1"><input type="text" name="input2"><button type="submit">Submit</button></form></body></html>');
    //res.sendFile(path.join(__dirname, '..', 'views','pages', 'form.ejs'));
    res.render('pages/form', {
        title: 'First page', 
        path: '/form'
    });
});
/*
router.get('/output', (req, res, next) => {
    //console.log(req.body);
    res.render('pages/output', {
        title: "Responses", 
        textArray: textArray,
        path: '/output'
    });
});
*/
router.post('/out', (req, res, next) => {
    const input1 = req.body.input1;
    const input2 = req.body.input2;
    const input3 = req.body.input3;
    //textArray.push({input: req.body.input1});
    //textArray.push({input: req.body.input2});
    //res.redirect('./output');
    res.render('pages/output', {
        title: "Responses", 
        //textArray: textArray,
        path: '/output',
        input1: input1,
        input2: input2,
        input3: input3
    });
    
});


module.exports = router;
