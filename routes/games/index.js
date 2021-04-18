const router = require('express').Router();
// const { toNamespacedPath } = require('path');
const path = require('path');

let games = [
  {id:1,
    p1: 1,
    p2: 2,
    gameState: {body: 'current board state'},
    history:{history: 'entire history json'} 
  },
  { id:2, 
    p1: 2,
    p2: 1,
    gameState: {body: ' another current board state'},
    history:{history: 'the entire history json'} 
  },

];

router.get('/', async(req, res) => {
  res.json(
    games
  );
});

router.get('/:id', function (req, res) {
  try {
    let id;
    if (req.params.id) {
      id = parseInt(req.params.id);
    }
    res.json({
      person: games.find(game => game.id === id)
    });
  } catch (e) {
    res.json({
      message: e.toString()
    });
  }
});

module.exports = router;