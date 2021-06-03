'use strict';
const { app } = require('firebase-admin');
const firebase = require('../db');
const Doctor = require('../models/doctor');
const firestore = firebase.firestore();


const addDoctor = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('Doctors').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllDoctors = async (req, res, next) => {
    try {
        const doctors = await firestore.collection('Doctors');
        const data = await doctors.get();
        const doctorsArray = [];
        if(data.empty) {
            res.status(404).send('No doctor record found');
        }else {
            data.forEach(doc => {
                const doctor = new Doctor(
                    doc.id,
                    doc.data().firstName,
                    doc.data().lastName,
                    doc.data().email,
                    doc.data().phoneNumber,
                    doc.data().speciality,
                    doc.data().password,
                    doc.data().address
                );
                doctorsArray.push(doctor);
            });
            res.send(doctorsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getDoctor = async (req, res, next) => {
    try {
        const id = req.params.id;
        const doctor = await firestore.collection('Doctors').doc(id);
        const data = await doctor.get();
        if(!data.exists) {
            res.status(404).send('doctor with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateDoctor = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const doctor =  await firestore.collection('Doctors').doc(id);
        await doctor.update(data);
        res.send('Doctors record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteDoctor = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('Doctors').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addDoctor,
    getAllDoctors,
    getDoctor,
    updateDoctor,
    deleteDoctor
}