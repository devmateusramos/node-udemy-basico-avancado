const fs = require('fs');

if (!fs.existsSync('./minhapasta')) {
    console.log('ainda não existe');
    fs.mkdirSync('minhapasta');
} else if (fs.existsSync('./minhapasta')){
    console.log('A pasta existe!');
}
