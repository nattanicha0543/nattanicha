const express = require('express');
const router = express.Router();
const myData = require('../data');


router.get('/', (req, res) => {
    res.render('index', { myData });
});


router.get('/aboutme', (req, res) => {
    res.render('about', { myData });
});

router.get('/skill', (req, res) => {
    res.render('skill', { myData });
});

module.exports = router;