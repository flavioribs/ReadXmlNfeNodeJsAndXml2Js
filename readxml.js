var fs = require('fs'),
xml2js = require('xml2js');
var co = require('co');

var repository = require('./mongorepository');

var parser = new xml2js.Parser(
    {
        mergeAttrs : true,
        childkey: true,
        explicitArray: false
    }
);

fs.readFile(__dirname + '/data.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        // var prod = [];
        // prod = result.nfeProc.NFe.infNFe.det;
        // var vlrTotal = 0.00;

        // for (i = 0; i < prod.length; i++) {
        //     console.log(prod[i].prod.xProd + ' - ' + prod[i].prod.vProd);
        //     vlrTotal+= parseFloat(prod[i].prod.vProd);            
        // } 
        // console.log(vlrTotal);

        //console.log(prod[0].prod);
        //var destCNPJ = result.nfeProc.NFe.infNFe.dest.CNPJ;
        //var destCPF = result.nfeProc.NFe.infNFe.dest.CPF;

       // if(destCNPJ == undefined){
       //     console.log(destCPF);
       // }else{
       //     console.log(destCNPJ);
      //  }

      repository.inserir(result.nfeProc.NFe.infNFe, function(err, callback){
          if(err){
              
          }
      });
       
    });
});