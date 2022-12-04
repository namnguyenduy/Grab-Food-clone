import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABtmRwnMboUz0Oftbmjeavp4XgcpH2vko",
  authDomain: "grabfoodclone-81763.firebaseapp.com",
  projectId: "grabfoodclone-81763",
  storageBucket: "grabfoodclone-81763.appspot.com",
  messagingSenderId: "243348383175",
  appId: "1:243348383175:web:5b0a9944eeff612688a5e2",
  measurementId: "G-FGRMTKP1CM",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
