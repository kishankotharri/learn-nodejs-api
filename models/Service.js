const db = require('../utils/db');

const Service = {
    getAllServices: (callback) => {
        const sql = 'SELECT * FROM services';
        db.query(sql, callback);
    },

    getServiceById: (id, callback) => {
        const sql = 'SELECT * FROM services WHERE service_id = ?';
        db.query(sql, [id], callback);
    },

    addService: (serviceData, callback) => {
        const sql = 'INSERT INTO services (name, description, price, status) VALUES (?, ?, ?, ?)';
        db.query(sql, [serviceData.name, serviceData.description, serviceData.price, serviceData.status], callback);
    },
    
    updateService: (id, serviceData, callback) => {
        const sql = 'UPDATE services SET name = ?, description = ?, price = ? WHERE service_id = ?';
        db.query(sql, [serviceData.name, serviceData.description, serviceData.price, id], callback);
    },

    deleteService: (id, callback) => {
        const sql = 'DELETE FROM services WHERE service_id = ?';
        db.query(sql, [id], callback);
    },
};

module.exports = Service;