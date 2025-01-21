const Service = require('../models/Service');

const getAllServices = (req, res) => {
    Service.getAllServices((err, results) => {
        if (err) {
            console.error('Error fetching services:', err.message);
            return res.status(500).send('Error fetching services');
        }
        res.json(results);
    });
};

const getServiceById = (req, res) => {
    const { id } = req.params;
    Service.getServiceById(id, (err, result) => {
        if (err) {
            console.error('Error fetching services:', err.message);
            res.status(500).send({ error: 'Error fetching the service.' });
        } else if (result.length === 0) {
            res.status(404).send({ message: 'Service not found.' });
        } else {
            res.status(200).send(result[0]);
        }
    });
};

const addService = (req, res) => {
    const serviceData = req.body;
    Service.addService(serviceData, (err, result) => {
        if (err) {
            res.status(500).send({ error: 'Error adding new service.' });
        } else {
            res.status(201).send({ message: 'Service added successfully!', serviceId: result.insertId });
        }
    });
};

const updateService = (req, res) => {
    const { id } = req.params;
    const serviceData = req.body;
    Service.updateService(id, serviceData, (err, result) => {
        if (err) {
            res.status(500).send({ error: 'Error updating the service.' });
        } else if (result.affectedRows === 0) {
            res.status(404).send({ message: 'Service not found.' });
        } else {
            res.status(200).send({ message: 'Service updated successfully!' });
        }
    });
};

const deleteService = (req, res) => {
    const { id } = req.params;
    const serviceData = req.body;
    Service.deleteService(id, (err, result) => {
        if (err) {
            res.status(500).send({ error: 'Error deleting the service.' });
        } else if (result.affectedRows === 0) {
            res.status(404).send({ message: 'Service not found.' });
        } else {
            res.status(200).send({ message: 'Service deleted successfully!' });
        }
    });
};

module.exports = {
    getAllServices,
    getServiceById,
    addService,
    updateService,
    deleteService,
};
