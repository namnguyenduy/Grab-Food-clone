// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABtmRwnMboUz0Oftbmjeavp4XgcpH2vko",
  authDomain: "grabfoodclone-81763.firebaseapp.com",
  projectId: "grabfoodclone-81763",
  storageBucket: "grabfoodclone-81763.appspot.com",
  messagingSenderId: "243348383175",
  appId: "1:243348383175:web:5b0a9944eeff612688a5e2",
  measurementId: "G-FGRMTKP1CM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export { auth };
