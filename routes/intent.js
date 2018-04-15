/*
 * GET users listing.
 */
const path = require('path');
const jsonfile = require('jsonfile');

exports.readfile = function(req, res) {
    var file = path.join(req.rootPath, 'data/intent.json');
    console.log(file);
    jsonfile.readFile(file, function(err, obj) {
        console.log(obj);
        res.send(obj);
    });
};

exports.savefile = function(req, res) {

    var file = path.join(req.rootPath, 'data/intent.json');
    console.log(file);
    var obj = req.body;

    jsonfile.writeFile(file, obj, function (err) {
        if (!err)
            res.send('Success');
        else        
            res.send(err);
    });
};
