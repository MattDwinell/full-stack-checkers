const Games = require('../models/game');
const {Op} = require('sequelize');

//all methods and logic for routes, begin with findall and create

module.exports = function(app) {
    app.get('/api/games', (req, res)=>{
        Games.findAll()
        .then((result)=>{
            return res.json(result);
        })
    })
    app.get('/api/games/open/:uid', (req, res)=>{
        let uid = decodeURI(req.params.uid);
        if(!uid) return res.status(500);
        Games.findAll({
            where:{
                gameOver: false,
                [Op.or]:[
                {playerOne: null},
                {playerTwo: null}
                ]
            },
            order: ['createdAt'],
            limit: 25
        })
        .then((result)=>{
            return res.json(result);
        })
    })
    app.post("/api/games", (req, res)=>{
        let gameInfo = req.body;
        console.log(gameInfo);
        console.log(gameInfo.playerOne);
        Games.create({
            playerOne: gameInfo.playerOne|| null,
            playerTwo: gameInfo.playerTwo|| null,
            playerOneDisplayName: gameInfo.playerOneDisplayName || null,
            playerTwoDisplayName: gameInfo.playerTwoDisplayName || null,
            gameOver: false,
            board: gameInfo.board,
            history: gameInfo.history,
            playerOnesTurn: true
        },{freezeTableName: true}).then((results)=>{
            res.json(results);
        })

        // res.json({'success':true});
    })
}