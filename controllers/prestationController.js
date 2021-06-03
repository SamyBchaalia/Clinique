'use strict';
const { app } = require('firebase-admin');
const firebase = require('../db');
const Prestation = require('../models/prestation');
const firestore = firebase.firestore();


const addPrestation = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('Prestations').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllPrestations= async (req, res, next) => {
    try {
        const prestations = await firestore.collection('Prestations');
        const data = await prestations.get();
        const prestationsArray = [];
        if(data.empty) {
            res.status(404).send('No prestation record found');
        }else {
            data.forEach(doc => {
                const prestation = new Prestation(
                    doc.id,
                    doc.data().idDoctor,
                    doc.data().idPatient,
                    doc.data().date,
                    doc.data().type
                );
                prestationsArray.push(prestation);
            });
            res.send(prestationsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getPrestation = async (req, res, next) => {
    try {
        const id = req.params.id;
        const prestation = await firestore.collection('Prestations').doc(id);
        const data = await prestation.get();
        if(!data.exists) {
            res.status(404).send('prestation with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatePrestation = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const prestation =  await firestore.collection('Prestations').doc(id);
        await prestation.update(data);
        res.send('prestationss record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deletePrestation = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('Prestations').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addPrestation,
    getAllPrestations,
    getPrestation,
    updatePrestation,
    deletePrestation
}