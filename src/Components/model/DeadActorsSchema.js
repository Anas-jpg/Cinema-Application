const moongose = require('mongoose');
const Schema = moongose.Schema;

const deadActorsDoc = new Schema({
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

const DeadActors = moongose.model('DeadActors', deadActorsDoc);

module.exports = DeadActors;

