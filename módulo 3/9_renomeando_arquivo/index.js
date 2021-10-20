const fs = require('fs');

const oldFileName = 'arquivo.txt';
const newFileName = 'arquivo2.txt';

fs.rename(oldFileName, newFileName, function(err) {
    if(err) {
        console.log(err);
    return
    }
    console.log(`O arquivo ${oldFileName} foi renomeado com sucesso para ${newFileName}`)
})