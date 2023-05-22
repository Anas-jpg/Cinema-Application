const moongose = require('mongoose');
const Schema = moongose.Schema;

const adamActorsDoc = new Schema({
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

const AdamActors = moongose.model('AdamActors', adamActorsDoc);

module.exports = AdamActors;