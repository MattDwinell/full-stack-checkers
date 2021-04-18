const router = require('express').Router();
const users = require('./users');
const games = require('./games');

// router.get('/', function(req, res) {
//   res.json({
//     message: 'Welcome to the API'
//   });
// });

router.use('/users', users);
router.use('/games', games);

module.exports = router;