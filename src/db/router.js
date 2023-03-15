var express = require ("express")
var router = express.Router()
var database = require('./connection.js');

// const path = require("path");
// console.log(path.join(__dirname ,"./connection.js" ))

router.get('/', (req, res , next) => {
    const sql = 'SELECT * FROM restro.contact';
    database.query(sql, (err, results) => {
      if (err) throw err;
      res.render('response.ejs', { data: results });
    });
  });



module.exports = router ;