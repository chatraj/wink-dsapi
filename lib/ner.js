// Load wink ner.
var ner = require( 'wink-ner' );
var t = require( 'wink-tokenizer' )().tokenize;

// Create your instance of wink ner & use defualt config.
var objNER = ner();

const path = require('path');
const jsonfile = require('jsonfile');

module.exports = {
	getObjNER : function() {
		return objNER;
	},
	loadWorkSpace : function(rootPath) {	
		// load NER learning data
		var file = path.join(rootPath, 'data/entity.json');
		console.log(file);
		var trainingData = [];
		jsonfile.readFile(file, function(err, obj) {
			console.log(obj);
			for(var e = 0 ; e < obj.length ; e++){
				for(var i = 0 ; i < obj[e].input.length ; i++){
					//nbc.learn( obj[i].query[q].text, obj[i].title );		
					trainingData.push({text:obj[e].input[i].text, entityType:obj[e].entityType})
				}
			}
			// Consolidate all the training!! 
			console.log(trainingData);
			objNER.learn(trainingData);

		});

    },

	predict : function(s){
		var tkns = t(s);
		console.log(tkns);
		return this.objNER.recognize( tkns );	
	},

	reloadWorkSpace : function(rootPath) {	
		//nbc.reset();
/*		var dbc = db.getDBCon();
		dbc.intent.find(function(error, documents){
			console.log('Getting intent list');
			for(var i = 0 ; i < documents.length ; i++){
				nbc.learn( documents[i].query, documents[i].title );		
			}
			// Consolidate all the training!! 
			nbc.consolidate();

		});*/
		this.loadWorkSpace(rootPath);
        }
};