const moongose = require('mongoose');
const Schema = moongose.Schema;

const avatarActorsDoc = new Schema({
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

const AvatarActors = moongose.model('AvatarActors', avatarActorsDoc);

module.exports = AvatarActors;

