const moongose = require('mongoose');
const Schema = moongose.Schema;

const action = new Schema({
    picture: {
        type: String,
        required: true
    },

    name: {
        type: String,
        require: true
    },

    about: {
        type: String,
        required: true
    }
}, { timestamps: true });

const actionList = moongose.model('actionList', action);

module.exports = actionList;