const router = require('express').Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../../client/public/'),
    filename: (req, file, cb) => {
        cb(null, Date.now() +"-"+ file.originalname)
    }
})
const fileUpload = multer({ storage: diskstorage }).single('image')

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
        const data = fs.readFileSync(path.join(__dirname, '../../client/public/' + req.file.filename))
 
        conn.query('INSERT INTO image (type,name,data,destination) values(?,?,?,?)', [type, name, data,destination], (err, rows) => {
            if(err) return res.status(500).send(err);
            res.send('image saved!')
        })
    })
})

module.exports = router
