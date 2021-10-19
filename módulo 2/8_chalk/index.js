const chalk = require('chalk');

const nota = 10;
if (nota >= 6) {
    console.log(chalk.green('Você foi aprovado parabéns!!!'));
} else {
    console.log(chalk.bgBlack.bold.yellow("Fazer novamente a avaliação! :))"))
}
