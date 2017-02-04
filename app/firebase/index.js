var firebase = require('firebase');

try {
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
  };
  firebase.initializeApp(config);
} catch (e){

}
// BASIC CRUD operations, .set -> create , .update -> update , .remove -> delete

export var firebaseRef = firebase.database().ref();
export var storageRef = firebase.storage().ref();

export default firebase;
