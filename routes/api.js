const express = require('express');
const router = express.Router();

var sdata = require('./sdata');
var intent = require('./intent');
var nlp = require('./nlp');
var entity = require('./entity');
var dialog = require('./dialog');


router.get('/sdata', sdata.list);

router.post('/sdata', sdata.create);

router.delete('/sdata/:id', sdata.delete);

/* Route for wink-admin start */

router.post('/predict', nlp.predict);

router.get('/reload', nlp.reload);

router.get('/entity', entity.readfile);

router.post('/entity', entity.savefile);

router.get('/intent', intent.readfile);

router.post('/intent', intent.savefile);

router.get('/dialog', dialog.readfile);

router.post('/dialog', dialog.savefile);

router.post('/dialog/response', dialog.findResponse);

/* Route for wink-admin end */

module.exports = router;