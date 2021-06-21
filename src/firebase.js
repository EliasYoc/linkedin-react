import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDr2yIGz3Zw60Iti-EtbLvoO-tk1Fyj3f8",
  authDomain: "lnkdin-cln.firebaseapp.com",
  projectId: "lnkdin-cln",
  storageBucket: "lnkdin-cln.appspot.com",
  messagingSenderId: "543328413314",
  appId: "1:543328413314:web:25cff03568345ba7b2b69b",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
