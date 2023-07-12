const fs = require('fs');
const path = ('path') ;


fs.readdir(path.join(__dirname, 'data'),function(err,files){
 if(err){
    console.log(err);
 } else{
    console.log(files);
 }
} )