/*
 * GET users listing.
 */
const path = require('path');
const jsonfile = require('jsonfile');

var objUtil = require('./util');

exports.readfile = function(req, res) {
    var file = path.join(req.rootPath, 'data/dialog.json');
    console.log(file);
    jsonfile.readFile(file, function(err, obj) {
        console.log(obj);
        res.send(obj);
    });
};

exports.savefile = function(req, res) {

    var file = path.join(req.rootPath, 'data/dialog.json');
    console.log(file);
    var obj = req.body;

    jsonfile.writeFile(file, obj, function (err) {
        if (!err)
            res.send('Success');
        else        
            res.send(err);
    });
};

exports.findResponse = function(req, res) {
    var file = path.join(req.rootPath, 'data/dialog.json');
    jsonfile.readFile(file, function(err, obj) {
        var objDialog = objUtil.getDialogElem(obj, req.body.intent);
        console.log(objDialog);
        res.send(objUtil.getResponseData(objDialog.dialog, req.body.entityType));
    });
    
};

