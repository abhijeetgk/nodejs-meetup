const express = require('express');
const router = express.Router();

module.exports = ()=>{
    router.get('/', (req, res, next) => {
        return res.send('In feedback');
    });
    router.post('/', (req, res, next) => {
        return res.send('form submitted');
    });
    return router;    
};