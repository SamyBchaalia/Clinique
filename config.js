'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID ,
    MEASUREMENT_ID
} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
        apiKey: "AIzaSyDikfM-4ebJ-pYUGGeh8kk9nCNJzObUlcU",
        authDomain: "goinprod-2e1a9.firebaseapp.com",
        projectId: "goinprod-2e1a9",
        storageBucket: "goinprod-2e1a9.appspot.com",
        messagingSenderId: "567854795934",
        appId: "1:567854795934:web:0c2be79f4c2d8d35cd3f8f",
        measurementId: "G-7ZCXEDC33G"

    }
}