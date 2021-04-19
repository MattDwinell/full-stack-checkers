const {Sequelize} = require("sequelize");
// const connectionURL = process.env.JAWSDB_URL || 

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('checkers_db', 'root', '25064c001023818v', {
    host: 'localhost',
    dialect:'mysql'
  });
try{
     sequelize.authenticate().then(
        console.log('connection established')  
     );
   
} catch(e){
    console.log(e);
}
module.exports = sequelize;