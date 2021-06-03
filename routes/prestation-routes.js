const express = require('express');
const {addPrestation, 
    getAllPrestations, 
       getPrestation,
       updatePrestation,
       deletePrestation
      } = require('../controllers/prestationController');

const router = express.Router();

router.post('/prestation', addPrestation);
router.get('/prestations', getAllPrestations);
router.get('/prestation/:id', getPrestation);
router.put('/prestation/:id', updatePrestation);
router.delete('/prestation/:id', deletePrestation);


module.exports = {
    routes: router
}