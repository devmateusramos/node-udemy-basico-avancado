const y = 'Mateus Ramos'
const x = 123
const z = [1,'ola mundo']

console.log(x, y , z);

// contagem de impressões 
console.count(`o valor de x é ${x}, contagem`);
console.count(`o valor de x é ${x}, contagem`);
console.count(`o valor de x é ${x}, contagem`); // se mudar qlqr coisa na frase volta pro 1 a contagem

// variável entre strings
console.log('O nome é %s, e ele é um programador', y);

// limpar o console
setTimeout(() => {
    console.clear();
}, 2000)
