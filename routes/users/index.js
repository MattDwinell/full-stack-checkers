const router = require('express').Router();
// const { toNamespacedPath } = require('path');
const path = require('path');

let users = [
  {
    id: 1,
    username: 'player one',
    password: 'some encrypted hash here'
  },
  {  id: 2,
    username: 'player two',
    password: 'some encrypted other hash here'
  },

];

router.get('/', async(req, res) => {
  res.json(
    users
  );
});

router.get('/:id', function (req, res) {
  try {
    let id;
    if (req.params.id) {
      id = parseInt(req.params.id);
    }
    res.json({
      person: users.find(user => user.id === id)
    });
  } catch (e) {
    res.json({
      message: e.toString()
    });
  }
});

module.exports = router;