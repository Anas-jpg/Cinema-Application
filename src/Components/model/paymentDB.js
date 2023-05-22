const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieCinemaSchema = new Schema({
  cardNumber: {
    type: String,
    validate: {
      validator: function (value) {
        return /^\d{16}$/.test(value);
      },
      message: 'Card number must be 16 digits',
    },
  },
  MonthYear: {
    type: String,
  },
  CVVCode: {
    type: String,
    validate: {
      validator: function (value) {
        return /^\d{3}$/.test(value);
      },
      message: 'CVV code must be 3 digits',
    },
  },
  Name: {
    type: String,
  },
}, { timestamps: true });

const Movie = mongoose.model('PaymentHistory', movieCinemaSchema);

module.exports = Movie;
