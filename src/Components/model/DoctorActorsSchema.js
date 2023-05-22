const moongose = require('mongoose');
const Schema = moongose.Schema;

const doctorActorsDoc = new Schema({
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

const DoctorActors = moongose.model('DoctorActors', doctorActorsDoc);

module.exports = DoctorActors;

