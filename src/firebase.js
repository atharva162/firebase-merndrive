import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD0hpcu9Z9kPrZ8W6hGiFkqxjjILuUxUaw",
    authDomain: "react-firebase-auth-16061.firebaseapp.com",
    projectId: "react-firebase-auth-16061",
    storageBucket: "react-firebase-auth-16061.appspot.com",
    messagingSenderId: "87937035623",
    appId: "1:87937035623:web:c3658dd1df806a7013d3c2"
  };
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;