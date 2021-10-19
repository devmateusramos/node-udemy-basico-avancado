const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([{
    name: 'nome',
    message: 'Qual o seu nome?'
}, {
    name: 'profissao',
    message: 'Qual a sua profissão?'
}]).then((answer) => {
    const response = `O nome do usuário é ${answer.nome} e a sua profissão é ${answer.profissao}`;
    console.log(chalk.bgYellow.black(response));
}).catch((e) => console.log(e))