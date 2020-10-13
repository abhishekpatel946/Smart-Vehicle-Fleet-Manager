// import * as firebase from "firebase/app";
// import "firebase/auth";

// const fireConfig = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: "smart-vehicle-fleet-manager.firebaseapp.com",
//   databaseURL: "https://smart-vehicle-fleet-manager.firebaseio.com",
//   projectId: "smart-vehicle-fleet-manager",
//   storageBucket: "smart-vehicle-fleet-manager.appspot.com",
//   messagingSenderId: "35283794292",
//   appId: "1:35283794292:web:8f57bd332e3993aa295421",
//   measurementId: "G-2RDWV3B4X4",
// });

// export default fireConfig;

import firebase from "firebase";

const fireConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  apiKey: "AIzaSyD_lqlIS5Gu-Vck6i_mwVRoQjkEGai40ms",
  authDomain: "smart-vehicle-fleet-manager.firebaseapp.com",
  databaseURL: "https://smart-vehicle-fleet-manager.firebaseio.com",
  projectId: "smart-vehicle-fleet-manager",
  storageBucket: "smart-vehicle-fleet-manager.appspot.com",
  messagingSenderId: "35283794292",
  appId: "1:35283794292:web:8f57bd332e3993aa295421",
  measurementId: "G-2RDWV3B4X4",
};

const firebaseApp = firebase.initializeApp(fireConfig);
const db = firebaseApp.firestore();

export { fireConfig };
export default db;
