const express = require('express');
const {addPatient, 
    getAllPatients, 
       getPatient,
       updatePatient,
       deletePatient
      } = require('../controllers/patientController');

const router = express.Router();

router.post('/patient', addPatient);
router.get('/patients', getAllPatients);
router.get('/patient/:id', getPatient);
router.put('/patient/:id', updatePatient);
router.delete('/patient/:id', deletePatient);


module.exports = {
    routes: router
}