const moongose = require('mongoose');
const Schema = moongose.Schema;

const justiceActorsDoc = new Schema({
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

const JusticeActors = moongose.model('JusticeActors', justiceActorsDoc);

module.exports = JusticeActors;

