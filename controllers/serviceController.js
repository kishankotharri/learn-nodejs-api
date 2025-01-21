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

module.exports = {
    getAllServices,
    getServiceById,
};
