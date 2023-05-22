const moongose = require('mongoose');
const Schema = moongose.Schema;

const avengersActorsDoc = new Schema({
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

const AvengersActors = moongose.model('AvengersActors', avengersActorsDoc);

module.exports = AvengersActors;

