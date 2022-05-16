const fs = require('fs');


// ahora voy a usar readfile para leer el archivo anteriormente

fs.readFile('ISA.txt', 'utf-8', (error, data) =>{
    if (!error){
        console.log(data);
    }else{
        console.log('Error: ${error}');
    }
});