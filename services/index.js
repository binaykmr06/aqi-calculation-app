const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const port = 3001;
const app  = express();
const concToAQI = require('../src/assects/library/conc_aqi.js');

// Create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    // Added database
    database: 'nodeservice'
})

// Connect to MySQL
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log("MySQL Connected");
});

//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//end body-parser configuration

// Create Database
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodeservice';
    db.query(sql, (err) => {
        if(err) {
            throw err;
        }
        res.send("Database Created");
    });
});

// Create Table
app.get('/air_quality_data', (req, res) => {
    let sql = 'CREATE TABLE air_quality_data(id int AUTO_INCREMENT, pollutant_id int, pollutant_name VARCHAR(255), pollutant_value VARCHAR(255), cutomer_id int, customer_name VARCHAR(255), customer_email_id VARCHAR(255), user_name VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err) => {
        if(err) {
            throw err;
        }
        res.send("air_quality_data table created");
    })
});

app.post('/insert_air_quality_data', async function (req, res) {
    var postData  = req.body;    
    var convertedData = await concToAQI.ConcAQI(postData.pollutant_id.toString(), postData.pollutant_value);
    db.query('INSERT INTO air_quality_data (pollutant_id, pollutant_name, pollutant_value, cutomer_id, customer_name, customer_email_id, user_name, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [
        postData.pollutant_id, postData.pollutant_name, convertedData.aqiValue, postData.cutomer_id, postData.customer_name, postData.customer_email_id, postData.user_name, postData.password], function (err, results, fields) {
       if (err) {
           throw err;
       }
       res.end(JSON.stringify({'status' : 'success', 'message': 'Data Added successfully'}));
     });
 });

 app.get('/get_aqi_value', (req, res) => {
     var sql = 'SELECT * FROM air_quality_data';

     db.query(sql, (err, results) => {
         if (err) {
             throw err;
         }
         res.end(JSON.stringify({'status' : 'success', 'aqi_data': results}));
     })
 })



app.listen(port, () => {
    console.log("Server stared on port 3001");
});