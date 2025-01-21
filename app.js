const express = require('express');
const db = require('./utils/db');
const serviceRoutes = require('./routes/serviceRoutes');

//require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api', serviceRoutes);

const PORT = process.env.PORT || 5001;

//console.log('DB Object:', db);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));