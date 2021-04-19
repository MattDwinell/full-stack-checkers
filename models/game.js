const Sequelize = require('sequelize');
const sequelize = require('../config/connection');
var Game = sequelize.define('games',{
    playerOne: {
        type: Sequelize.DataTypes.STRING
    },
    playerTwo:{
        type: Sequelize.DataTypes.STRING
    },
    playerOneDisplayName:{
        type: Sequelize.DataTypes.STRING
    },
    playerTwoDisplayName:{
        type: Sequelize.DataTypes.STRING
    },
    playerOnesTurn:{
        type: Sequelize.DataTypes.BOOLEAN
    },
    gameOver:{
        type: Sequelize.DataTypes.BOOLEAN
    },
    board:  {
        type: Sequelize.DataTypes.JSON
    },
    history: {
        type: Sequelize.DataTypes.JSON
    }


},
{freezeTableName:true});
Game.sync();
module.exports = Game;