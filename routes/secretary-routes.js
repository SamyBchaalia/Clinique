const express = require('express');
const {addSecretary, 
    getAllSecretarys, 
       getSecretary,
       updateSecretary,
       deleteSecretary
      } = require('../controllers/secretaryController');

const router = express.Router();

router.post('/secretary', addSecretary);
router.get('/secretarys', getAllSecretarys);
router.get('/secretary/:id', getSecretary);
router.put('/secretary/:id', updateSecretary);
router.delete('/secretary/:id', deleteSecretary);



module.exports = {
    routes: router
}