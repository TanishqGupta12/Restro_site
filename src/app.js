const con = require('../src/db/connection.js');
const express = require("express");
const path = require("path");
const router = require('../src/db/router.js');
const routers = require('../src/db/router2.js');

const app = express();
const port = process.env.PORT || 2511;
const statipath = path.join(__dirname, "../public")

app.use(express.static(statipath));

// fectching

var bodyParse = require('body-parser')
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));


app.post('/reservation.html', function (req, res) {
    const dates = req.body.dates;
    const times = req.body.times;
    const Person_number = req.body.Person_number;
    const Person_name = req.body.Person_name;
    const Person_email = req.body.Person_email;
    const Phone_number = req.body.Phone_number;

    const sql = "INSERT INTO Reservation (dates,times,Person_number,Person_name,Person_email,Phone_number) VALUES(?,?,?,?,?,?)"
    
    con.query(sql, [dates, times, Person_number, Person_name, Person_email, Phone_number], function (error, result) {
        if (error) throw error;
      res.sendFile(path.join(__dirname , '../Public/tani.html'))
    });
});

app.post('/contact.html', function (req, res) {
    const name = req.body.name;
    const email= req.body.email;
    const message = req.body.message;
    
    const sql = "INSERT INTO Contact (name,email,message) VALUES(?,?,?)"

    con.query(sql, [name,email,message], function (error, result) {
        if (error) throw error;
        // res.send(' Contact successfull' + result.insertId);
        res.sendFile(path.join(__dirname , '../Public/tani.html'))
        console.log("Contact successfull");
    });
    
});

console.log();

//routing
// admin

app.set("view engine" , "ejs")
app.set("views" ,path.join(__dirname, "../src/admin/") )

app.get('/admin', (req, res) => {
    res.render("admin.ejs");
});


// reservation
app.use('/from.ejs' , routers)
// contact
app.use('/response.ejs' , router)

app.post('/admincontrol',(req, res , next) =>{
    res.redirect('/response.ejs');
})


app.listen(port, () => {
    console.log('sever is running at port no', port);
    console.log('http://localhost:2511/');
    // console.log(db);
})