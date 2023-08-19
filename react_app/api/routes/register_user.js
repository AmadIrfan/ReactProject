const express = require('express');

// var { transport } = require('./Node Mailer/mails')
const router = express.Router();
// const multer = require('multer');
// const { connection } = require('../DB/sql');
const { db } = require('../MongoDb/monogodb')
// let storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './public/images')
//     }
//     ,
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + file.originalname);
//     },
// });

// var upload=multer({storage});
router.post('/', (req, res) => {
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let password = req.body.password;
    console.log(fname, lname, email, password)
    // let mailIn = {
    //     from: 'AmadIrfan amadirfan443@gmail.com',
    //     to: email,
    //     subject: 'THis is secret',
    //     html: '<p> done ok.</p>'
    // }
    // transport.sendMail(mailIn, (err, req) => {
    //     if (err) {
    //         throw err;
    //     }
    //     else {
    //         console.log('sent');
    //     }
    // })
    let data = {
        'fname': fname,
        'lname': lname,
        'email': email,
        'password': password,
    }
    db.collection('users').insertOne(data, (err, r) => {
        // connection.query('INSERT into user set ?', data, (err, res) => {
        if (err) {
            alert(err.message)
        }
        else {
            console.log('data stored');
            res.redirect('http://localhost:3000/register')
        }

    });
})


module.exports = router;