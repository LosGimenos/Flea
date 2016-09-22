const firebase = require('firebase');

const config = {
  apiKey: "AIzaSyDdyjTRkWG98P6hKeEFARFYv_KQ_hT_2tA",
  authDomain: "flea-f71cd.firebaseapp.com",
  databaseURL: "https://flea-f71cd.firebaseio.com",
  storageBucket: "flea-f71cd.appspot.com",
  messagingSenderId: "15791532464"
};

firebase.initializeApp(config);

module.exports = firebase;
