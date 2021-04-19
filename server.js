const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();
// require('./database');
app.use(express.json());
app.use(cors());
// API
// const users = require('/api/users');
// app.use('/api/users', users);
// ... other app.use middleware 
require('./models/game');
app.use(express.static(path.join(__dirname, "client", "build")))
// const routes = require('./routes');
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization,X-Requested-With');
  
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }
  });

require('./controllers/gameController')(app);
app.get("*", (req, res) => {
    // console.log((path.join(__dirname, "client", "build", "index.html")));
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});