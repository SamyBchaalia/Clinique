'use strict';
const { app } = require('firebase-admin');
const firebase = require('../db');
const Secretary = require('../models/secretary');
const firestore = firebase.firestore();


const addSecretary = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('Secretarys').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllSecretarys = async (req, res, next) => {
    try {
        const secretarys = await firestore.collection('Secretarys');
        const data = await secretarys.get();
        const secretarysArray = [];
        if(data.empty) {
            res.status(404).send('No secretary record found');
        }else {
            data.forEach(doc => {
                const secretary = new Secretary(
                    doc.id,
                    doc.data().firstName,
                    doc.data().lastName,
                    doc.data().phoneNumber,
                    doc.data().email,
                    doc.data().password 
                );
                secretarysArray.push(secretary);
            });
            res.send(secretarysArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getSecretary = async (req, res, next) => {
    try {
        const id = req.params.id;
        const secretary = await firestore.collection('Secretarys').doc(id);
        const data = await secretary.get();
        if(!data.exists) {
            res.status(404).send('secretary with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateSecretary = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const secretary =  await firestore.collection('Secretarys').doc(id);
        await secretary.update(data);
        res.send('Secretarys record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteSecretary = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('Secretarys').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addSecretary,
    getAllSecretarys,
    getSecretary,
    updateSecretary,
    deleteSecretary
}

