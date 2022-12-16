import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey:"AIzaSyApx91KpYmcG7R_r3BaVV0qO-2qMBgDJWM",
  authDomain: "linkedin-clone-yt-79b17.firebaseapp.com",
  projectId: "linkedin-clone-yt-79b17",
  storageBucket: "linkedin-clone-yt-79b17.appspot.com",
  messagingSenderId: "926439625094",
  appId:"1:926439625094:web:048de0ff4e4adae34ddc07"
};

// connects to our database, sets everything up and it works
const firebaseApp = firebase.initializeApp(firebaseConfig);

// get db, inside db we can access variable
const db = firebaseApp.firestore();

// getting access to the authentication
const auth =  firebase.auth();

// we need (db, auth) variables outside in different files bcz we have set them up
export { db, auth };