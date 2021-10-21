const { Router } = require('express');

const { carController } = require('../controller');

const carRouter = Router();

carRouter
  .route('/')
  .get(carController.getCars)
  .post(carController.createCar);

carRouter
  .route('/:carId')
  .get(carController.getCarById)
  .patch(carController.updateCarById, carController.getCarById)
  .delete(carController.deleteCarById);

module.exports = carRouter;
