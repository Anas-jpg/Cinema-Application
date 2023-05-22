const moongose = require('mongoose');
const Schema = moongose.Schema;

const johnActorsDoc = new Schema({
    picture: {
        type: String,
        required: true
    },
    name: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
}, { timestamps: true });

const JohnActors = moongose.model('JohnActors', johnActorsDoc);

module.exports = JohnActors;

