const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Qual a sua linguagem número 1?', (language) => {
    if (language === 'php') {
        console.log('Na verdade é typescript!!');
    } else {
        console.log(`Parabéns continue com o ${language}`);
    }
    readline.close();
})