const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodesequelize1', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

// try {
//     sequelize.authenticate();
//     console.log('Conectamos com sucesso ao sequelize');
// } catch (error) {
//     console.log(error);
// }

module.exports = sequelize;