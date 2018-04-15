/*
 * GET users listing.
 */
var db = require("../lib/winkdb");

exports.list = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
        console.log(req.params.id);

  		dbc.query('SELECT miq.qid, miq.id, mi.title, miq.query FROM ms_intent_query miq, ms_intent mi where miq.id = mi.id and miq.id = ' + req.params.id, function(err, rows) {
			//connection.end();
			if (!err){
                console.log('Getting intent query list');
                res.send(rows);
			}
			else{
				console.log('Error while performing Query.');
			}
		});

};

exports.find = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    console.log(req.params.id);
    
    dbc.query('SELECT * from ms_intent_query where  qid =' + req.params.id, function(err, rows) {
        if (!err){
            console.log('Getting intent query for ' + req.params.id);
            console.log(rows[0]);
            res.send(rows[0]);
        }
        else{
            console.log('Error while performing Query.');
        }
    });

};

exports.create = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    console.log(req.body);

    dbc.query("insert into ms_intent_query (id, query) values ('" + req.body.id + "', '" + req.body.query + "')", function(err, result) {
        //connection.end();
        if (!err){
            console.log('Intent Query row inserted' + result);
            res.send(result);
        }
        else{
            console.log('Error while performing Query.');
        }
    });

};

exports.update = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    console.log(req.body);

    dbc.query("update ms_intent_query set query = '" + req.body.query + "' where qid = " + req.params.id, function(err, result) {
        //connection.end();
        if (!err){
            console.log('Intent Query row updated' + result);
            res.send(result);
        }
        else{
            console.log('Error while performing Query.');
        }
    });

};

exports.delete = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    console.log('Row to be deleted for record:- ' + Number(req.params.id));
    dbc.query("delete from ms_intent_query where qid = " + req.params.id, function(err, result) {
        //connection.end();
        if (!err){
            console.log('Intent Query row deleted' + result);
            res.send(result);
        }
        else{
            console.log('Error while performing Query.');
        }
    });
};