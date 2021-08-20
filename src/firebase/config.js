import firebase from 'firebase'
import '@firebase/auth';
import '@firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAsMFvVbfMlTY-IAj874CZcgAconh-fqtI",
    authDomain: "popup-meals-b6bfd.firebaseapp.com",
    projectId: "popup-meals-b6bfd",
    storageBucket: "popup-meals-b6bfd.appspot.com",
    messagingSenderId: "1041246879104",
    appId: "1:1041246879104:web:6c4537c5ec972d7f911565",
    measurementId: "G-3C60JNERRL"
  };



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export { firebase };