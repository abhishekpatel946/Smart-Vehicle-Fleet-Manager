import firebase from 'firebase';
require('dotenv').config();

var firebaseConfig = {
    apiKey: process.env.NODE_ENV,
    authDomain: "smart-vehicle-fleet-manager.firebaseapp.com",
    databaseURL: "https://smart-vehicle-fleet-manager.firebaseio.com",
    projectId: "smart-vehicle-fleet-manager",
    storageBucket: "smart-vehicle-fleet-manager.appspot.com",
    messagingSenderId: "35283794292",
    appId: "1:35283794292:web:8f57bd332e3993aa295421",
    measurementId: "G-2RDWV3B4X4"
};

const fireConfig = firebase.initializeApp(firebaseConfig);

export default fireConfig;