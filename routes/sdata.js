/*
 * GET users listing.
 */
var db = require("../lib/winkdb");

exports.list = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
        
  		dbc.query('SELECT * from ms_sdata', function(err, rows) {
			//connection.end();
			if (!err){
                console.log('Getting sample data list');
                res.send(rows);
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

    dbc.query("insert into ms_sdata (query) values ('" + req.body.query + "')", function(err, result) {
        //connection.end();
        if (!err){
            console.log('Sample data query row inserted' + result);
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
    dbc.query("delete from ms_sdata where id = " + req.params.id, function(err, result) {
        //connection.end();
        if (!err){
            console.log('Sample data row deleted' + result);
            res.send(result);
        }
        else{
            console.log('Error while performing Query.');
        }
    });
};

