// Load Naive Bayes Text Classifier 
var nbc = require( 'wink-naive-bayes-text-classifier' )();
// Load NLP utilities 
var nlp = require( 'wink-nlp-utils' );

const path = require('path');
const jsonfile = require('jsonfile');

module.exports = {
	getObjNBC : function() {
		return nbc;
	},
	loadWorkSpace : function(rootPath) {	
		// Configure preparation tasks 
		nbc.definePrepTasks( [
		// Simple tokenizer 
		nlp.string.tokenize0,
		// Common Stop Words Remover 
		nlp.tokens.removeWords,
		// Stemmer to obtain base word 
		nlp.tokens.stem
		] );
		// Configure behavior 
		nbc.defineConfig( { considerOnlyPresence: true, smoothingFactor: 0.5 } );
		// Train! 
		nbc.learn( 'I want to prepay my loan', 'prepay' );
		nbc.learn( 'I want to close my loan', 'prepay' );
		nbc.learn( 'I want to foreclose my loan', 'prepay' );
		nbc.learn( 'I would like to pay the loan balance', 'prepay' );
		
		//nbc.learn( 'I would like to borrow money to buy a vehicle', 'autoloan' );
		//nbc.learn( 'I need loan for car', 'autoloan' );
		//nbc.learn( 'I need loan for a new vehicle', 'autoloan' );
		//nbc.learn( 'I need loan for a new mobike', 'autoloan' );
		//nbc.learn( 'I need money for a new car', 'autoloan' );

		var file = path.join(rootPath, 'data/intent.json');
		console.log(file);
		jsonfile.readFile(file, function(err, obj) {
			console.log(obj);
			for(var i = 0 ; i < obj.length ; i++){
				console.log(obj[i]);
				for(var q = 0 ; q < obj[i].query.length ; q++){
					nbc.learn( obj[i].query[q].text, obj[i].title );		
				}
			}
			// Consolidate all the training!! 
			nbc.consolidate();

		});

    },

	reloadWorkSpace : function(rootPath) {	
		nbc.reset();
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