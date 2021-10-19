const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
console.log(args);

const nome = args['nome'];
const idade = args['idade'];
let profissao = args['profissao'].split('_');
profissao = profissao.join(' ');
console.log(`O ${nome} tem ${idade} anos e sua profissão é ${profissao}`);
