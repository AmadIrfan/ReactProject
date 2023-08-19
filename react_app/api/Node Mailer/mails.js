const nodeMail = require('nodemailer')
let transport = nodeMail.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'amadirfan443@gmail.com',
        pass: "123@amadirfan4243"
    }
})
module.exports = { transport }