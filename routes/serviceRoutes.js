const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Define the /getservices endpoint
router.get('/getservices', serviceController.getAllServices);
router.get('/services/:id', serviceController.getServiceById);

module.exports = router;
