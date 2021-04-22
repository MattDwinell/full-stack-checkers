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
    app.get('/api/games/find-one/:id', (req, res)=>{
        let id = decodeURI(req.params.id);
        if(!id) return res.status(500);
        Games.findOne({
            where:{
                id: id
            }
        })
        .then((result)=>{
            return res.json(result);
        })
    })
    app.get('/api/games/:uid', (req,res)=>{
        let uid = decodeURI(req.params.uid);
        console.log(uid);
        Games.findAll({
            where:{
                gameOver:false,
                playerOne: {[Op.like] : [ '%%']},
            [Op.not] : [{playerTwo:null}],
                [Op.or]:[
                    {playerOne: uid}, {playerTwo: uid}
                ]   
            }
        })
        .then((result)=>{
            return res.json(result);
        })
    })
    app.delete("/api/games/:id", (req, res)=> {
        Games.destroy({
          where: {
            id: req.params.id
          }
        })
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });
    app.post("/api/games", (req, res)=>{
        let gameInfo = req.body;
        Games.create({
            playerOne: gameInfo.playerOne|| null,
            playerTwo: gameInfo.playerTwo|| null,
            playerOneDisplayName: gameInfo.playerOneDisplayName || null,
            playerTwoDisplayName: gameInfo.playerTwoDisplayName || null,
            gameOver: false,
            winner: null,
            board: gameInfo.board,
            history: gameInfo.history,
            playerOnesTurn: true
        },{freezeTableName: true}).then((results)=>{
            res.json(results);
        })
    })
    app.put("/api/games/:id", (req, res)=>{
        let gameId = req.params.id;
        if(! gameId) return res.status('500');
        console.log(req.body);
        Games.update(req.body,{
            where:{ 
                id: gameId
            }
        }).then((success)=>{
           return res.json(success);
        })
    })
}