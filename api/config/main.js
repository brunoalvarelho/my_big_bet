const mongoose = require('mongoose')

// connection to DB
exports.connectionToDb = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/mbb', { useNewUrlParser: true })
    const db = mongoose.connection
    db.on('error', () => {
        console.log('mongoDB error...')
    })
}

// Key JWT Token
exports.jwtKey = 'fluctuat_nec_mergitur'