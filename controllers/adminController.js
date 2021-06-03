'use strict';
const { app } = require('firebase-admin');
const firebase = require('../db');
const Admin = require('../models/admin');
const firestore = firebase.firestore();


const addAdmin = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('Admin').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllAdmins = async (req, res, next) => {
    try {
        const admins = await firestore.collection('Admin');
        const data = await admins.get();
        const adminsArray = [];
        if(data.empty) {
            res.status(404).send('No Admin record found');
        }else {
            data.forEach(doc => {
                const admin = new Admin(
                    doc.id,
                    doc.data().email,
                    doc.data().password,
                );
                adminsArray.push(admin);
            });
            res.send(adminsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}



const deleteAdmin = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('Admins').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addAdmin,
    getAllAdmins,
    deleteAdmin
}