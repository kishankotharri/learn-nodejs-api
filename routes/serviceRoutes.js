const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Define the /getservices endpoint
router.get('/services', serviceController.getAllServices);
router.get('/service/:id', serviceController.getServiceById);
router.post('/service', serviceController.addService);
router.put('/service/:id', serviceController.updateService);
router.delete('/service/:id', serviceController.deleteService);

module.exports = router;
