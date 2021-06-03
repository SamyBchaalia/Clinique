'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const patientRoutes = require('./routes/patient-routes');
const prestationRoutes = require('./routes/prestation-routes');
const adminRoutes = require('./routes/admin-routes');
const doctorRoutes = require('./routes/doctor-routes');
const secretaryRoutes = require('./routes/secretary-routes');


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', patientRoutes.routes);
app.use('/api', prestationRoutes.routes);
app.use('/api', adminRoutes.routes);
app.use('/api', doctorRoutes.routes);
app.use('/api', secretaryRoutes.routes);







app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));
