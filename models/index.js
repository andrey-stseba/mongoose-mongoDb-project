const mongoose = require('mongoose');

const env = process.env.NODE_ENV ?? 'development';
const config = require('./../config/db')[env];

mongoose
  .connect(`mongodb://${config.host}:${config.port}/${config.dbName}`)
  .then(data => console.log(`Connection OK`))
  .catch(err => console.log(`error`, err));

module.exports.Car = require('./car');
