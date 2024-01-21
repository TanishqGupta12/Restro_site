var express = require ("express")
var router = express.Router()
var database = require('./connection.js');

// const path = require("path");
// console.log(path.join(__dirname ,"./connection.js" ))

router.get('/', (req, res , next) => {
    const sql = 'SELECT * FROM Reservation';
    database.query(sql, (err, results) => {
      if (err) throw err;
      if (results  && results.length > 0 ) {
        res.render('from.ejs', { data: results });
        } else {
        res.render('from.ejs', { data: { data:"No data"} });
        }

    });
  });



module.exports = router ;