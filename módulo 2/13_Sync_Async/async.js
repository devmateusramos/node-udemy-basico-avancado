const fs = require('fs');

console.log('início');
fs.writeFile('arquivo.txt', 'oi', function(error) {
    setTimeout(() => {
        console.log('Arquivo criado');
    }, 5000)
});
console.log('fim');