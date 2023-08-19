const mongoose = require('mongoose');

var password = '123amadirfan';
mongoose.set('strictQuery', false)
mongoose.connect(`mongodb+srv://amadirfan443:${password}@cluster0.s33wv4c.mongodb.net/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

var db = mongoose.connection;

db.on('error', () => console.log('error'),);
db.once('open', () => console.log('mdb connected'),);

module.exports={db}
