const createError = require('http-errors');
const { Car } = require('./../models');

module.exports.createCar = async (req, res, next) => {
  const { body } = req;

  try {
    const newCarInstanse = new Car(body);
    const createdCar = await newCarInstanse.save();

    if (createdCar) {
      return res.status(200).send({ data: createdCar });
    }
    next(createError(400, 'Bad request'));
  } catch (err) {
    next(err);
  }
};

module.exports.getCars = async (req, res, next) => {
  try {
    const foundCars = await Car.find().limit(4);

    res.status(200).send({ data: foundCars });
  } catch (err) {
    next(err);
  }
};

module.exports.getCarById = async (req, res, next) => {
  const {
    params: { carId },
  } = req;
  try {
    const foundCar = await Car.findById(carId);
    if (foundCar) {
      return res.status(200).send({ data: foundCar });
    }
    next(createError(404, 'User not found'));
  } catch (err) {
    next(err);
  }
};

module.exports.updateCarById = async (req, res, next) => {
  const {
    params: { carId },
    body,
  } = req;
  try {
    const updatedCar = await Car.findByIdAndUpdate(carId, body);
    if (updatedCar) {
      return next();
    }
    next(createError(404, 'User not found'));
  } catch (err) {
    next(err);
  }
};

module.exports.deleteCarById = async (req, res, next) => {
  const {
    params: { carId },
  } = req;
  try {
    const deletedCar = await Car.findByIdAndDelete(carId);
    if (deletedCar) {
      return res.status(200).send({ data: deletedCar });
    }
    next(createError(404, 'User not found'));
  } catch (err) {
    next(err);
  }
};
