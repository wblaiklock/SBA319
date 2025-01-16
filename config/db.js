const mongoose = require('mongoose');

const ConnectDB = async() => {

    try {
        mongoose.connect(process.env.MONGO_URI);
        mongoose.connection.once("open", () => {
            console.log ("MongoDB connected");
        })
    } catch {
        console.log(error.message);
    }
}

module.exports = ConnectDB;