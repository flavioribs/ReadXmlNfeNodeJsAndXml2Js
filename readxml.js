var fs = require('fs'),
xml2js = require('xml2js');
var path = require('path');

var parser = new xml2js.Parser({mergeAttrs : true, childkey: true, explicitArray: false });
fs.readFile(__dirname + '/data.xml', function(err, data) {
parser.parseString(data, function (err, result) {
    console.dir(result.nfeProc.NFe.infNFe.ide.cUF);//.nfeProc.NFe[0].infNFe[0].ide[0].cUF);
    console.log('Done');
});
});