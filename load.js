
/*function load(){
    return new Promise(function(resolve,reject){
         window.onload = resolve;
    });
}

load().then(function(){
  console.log("We are loaded !");
  //resolve("loaded"); // Rest of your programm
});*/

let fs = require('fs');
console.log('Executed befor file Reading': Contactlist);
fs.readFile('./files/file', 'utf8', function(error, data){
  console.log('data': Conatctlist);
});
console.log('Executed After file Reading': Contactlist);
