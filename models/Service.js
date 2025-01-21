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
};

module.exports = Service;