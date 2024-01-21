var mysql = require('mysql');
var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123",
    database : "restro",
    port : 3306
});


conn.connect(function(err){
    if(err) throw err;
    console.log("Database created!");

});
module.exports = conn