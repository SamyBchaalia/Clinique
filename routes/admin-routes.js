const express = require('express');
const {addAdmin, 
    getAllAdmins, 
       deleteAdmin
      } = require('../controllers/adminController');

const router = express.Router();

router.post('/admin', addAdmin);
router.get('/admins', getAllAdmins);
router.delete('/admin/:id', deleteAdmin);


module.exports = {
    routes: router
}