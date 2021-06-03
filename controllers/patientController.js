'use strict';
const { app } = require('firebase-admin');
const firebase = require('../db');
const Patient = require('../models/patient');
const firestore = firebase.firestore();


const addPatient = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('Patients').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllPatients = async (req, res, next) => {
    try {
        const patients = await firestore.collection('Patients');
        const data = await patients.get();
        const patientsArray = [];
        if(data.empty) {
            res.status(404).send('No patient record found');
        }else {
            data.forEach(doc => {
                const patient = new Patient(
                    doc.id,
                    doc.data().firstName,
                    doc.data().lastName,
                    doc.data().phoneNumber,
                    doc.data().birthday
                );
                patientsArray.push(patient);
            });
            res.send(patientsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getPatient = async (req, res, next) => {
    try {
        const id = req.params.id;
        const patient = await firestore.collection('Patients').doc(id);
        const data = await patient.get();
        if(!data.exists) {
            res.status(404).send('patient with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatePatient = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const patient =  await firestore.collection('Patients').doc(id);
        await patient.update(data);
        res.send('Patients record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deletePatient = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('Patients').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addPatient,
    getAllPatients,
    getPatient,
    updatePatient,
    deletePatient
}