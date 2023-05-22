const moongose = require('mongoose');
const Schema = moongose.Schema;

const jumangiActorsDoc = new Schema({
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

const JumangiActors = moongose.model('JumangiActors', jumangiActorsDoc);

module.exports = JumangiActors;

