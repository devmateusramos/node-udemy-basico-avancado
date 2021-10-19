const meuModule = require('./meu_module'); // Se não por o ./ ele não vai entender q é modulo interno e então não vai funcionar, pode suprimir o .js.
const soma = meuModule.soma;

soma(3, 4);
soma(4, 5);
meuModule.soma(10, 15);