const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const app = express()
const router = require('express').Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs')

// Database config --Update here as required.
const mysqlSettings = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'project'
}

// Setting up multer
const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, './public/'),
    filename: (req, file, cb) => {
        cb(null, Date.now() +"-"+ file.originalname)
    }
})
const fileUpload = multer({ storage: diskstorage }).single('image')


// setting up routes
router.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.status(500).send('server error')
        conn.query(`select name as src from image`, [], (err, rows) => {
            if(err) return res.status(500).send(err);
            res.send(JSON.parse(JSON.stringify(rows)));
		})
	})
})

router.post('/images/post', fileUpload, (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.status(500).send('server error')
        const type = req.file.mimetype
        const name = "/"+req.file.filename
        const destination = req.body.title
        const data = fs.readFileSync(path.join(__dirname, './public/' + req.file.filename))
 
        conn.query('INSERT INTO image (type,name,data,destination) values(?,?,?,?)', [type, name, data,destination], (err, rows) => {
            if(err) return res.status(500).send(err);
            res.send('image saved!')
        })
    })
})

// Setting up mysql connection

app.use(myconn(mysql, mysqlSettings))

// Setting up CORS
app.use(cors())

// Adding router to Express
app.use(router)

// Start application
app.listen(9000, () => {
    console.log('Starting server on url: ', 'http://localhost:' + 9000)
})
