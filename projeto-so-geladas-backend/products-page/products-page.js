const Sequelize = require('sequelize');
const database = require('./db');

 
const Produto = database.define('produtos',{

    idx: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    NOME: {
        type: Sequelize.STRING,
        allowNull: false

    },
    TIPO:Sequelize.STRING,
    VALOR: Sequelize.DECIMAL,
    CAMINHO_IMAGEM: Sequelize.STRING


})

module.exports = Produto;
