const mongoose = require('mongoose');
const { Schema } = mongoose;

const carSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  series: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    validate: {
      validator: date => new Date(date) < new Date(),
    },
  },
  isСrashed: {
    type: Boolean,
    default: false,
  },
  mileage: {
    type: Number,
    required: true,
    min: 0,
  },
  color: {
    type: String,
    required: true,
  },
});

const Car = mongoose.model('cars', carSchema);

module.exports = Car;
