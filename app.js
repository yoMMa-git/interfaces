const express = require("express");
const app = express();
const port = 3000;

const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'yomma',
    password: 'yomma',
    port: 3306,
    database: 'fpmi_db'
})

conn.connect(err => {
    if (err) {
        console.log(err)
    } else {
        console.log('DATABASE: OK')
    }
});

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html') // as soon as we get request from user - send him HTML file with layout
})

app.listen(port, '0.0.0.0', () => {
    console.log(`App listening on port ${port}`)
})