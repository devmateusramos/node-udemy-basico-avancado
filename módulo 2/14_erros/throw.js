const x = '10';

if(!Number.isInteger(x)) {
    throw new Error('X não é inteiro');
};
console.log('continuando...')