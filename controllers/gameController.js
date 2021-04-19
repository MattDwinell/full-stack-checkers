const Games = require('../models/game');

//all methods and logic for routes, begin with findall and create

module.exports = function(app) {
    app.get('/api/games', (req, res)=>{
        Games.findAll()
        .then((result)=>{
            return res.json(result);
        })
    })
    app.post("/api/games", (req, res)=>{
        let gameInfo = req.body;
        console.log(gameInfo);
        console.log(gameInfo.playerOne);
        res.json({'success':true});
    })
}