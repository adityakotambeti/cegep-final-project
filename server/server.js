const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const app = express()
const routes = require('./routes/routes')

app.use(myconn(mysql, {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'demodemo'
}))

app.use(cors())
app.use(routes)
app.listen(9000, () => {
    console.log('Starting server on url: ', 'http://localhost:' + 9000)
})