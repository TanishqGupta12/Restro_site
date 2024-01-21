var express = require ("express")
var router = express.Router()
var database = require('./connection.js');

// const path = require("path");
// console.log(path.join(__dirname ,"./connection.js" ))

router.get('/', (req, res , next) => {
    const sql = 'SELECT * FROM restro.contact';
    database.query(sql, (err, results) => {
      if (err) throw err;
      if (results && results.length > 0) {
      res.render('response.ejs', { data: results });
      console.log(results);
      } else {
      res.render('response.ejs', { data: "No data" });
        
      }
    });
  });



module.exports = router ;