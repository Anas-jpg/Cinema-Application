const moongose = require('mongoose');
const Schema = moongose.Schema;

const jungleActorsDoc = new Schema({
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

const JungleActors = moongose.model('JungleActors', jungleActorsDoc);

module.exports = JungleActors;

