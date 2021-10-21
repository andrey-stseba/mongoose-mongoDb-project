const { Router } = require('express');
const carRouter = require('./routes/carRouter');

const router = Router();
router.use('/cars', carRouter);

module.exports = router;
