const router = require('express').Router();
const users = require('./users');
const gameRoutes = require('./games');
const path = require('path');

// router.get('/', function(req, res) {
//   res.json({
//     message: 'Welcome to the API'
//   });
// });

router.use('/users', users);
router.use('/games', gameRoutes);

module.exports = router;