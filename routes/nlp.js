/*
 * Process NLP request
 */
var nbc = require("../lib/nbc");
var ner = require("../lib/ner");
var t = require( 'wink-tokenizer' )().tokenize;


exports.predict = function(req, res) {
	//getStudentList(req, res);
	var nlp = nbc.getObjNBC();
    console.log(req.body.query);
    var iOutput = nlp.predict( req.body.query);
    console.log(iOutput);
    var entity = ner.getObjNER().predict(t(req.body.query));
    console.log(entity);
    res.send({"intent":iOutput, "entity":entity});
    
};

exports.reload = function(req, res) {
	console.log('Reload Training Start');
    nbc.reloadWorkSpace(req.rootPath);
    ner.reloadWorkSpace(req.rootPath);
    console.log('Reload Training End');
    res.send({'output':'success'});
    
};
