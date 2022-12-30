import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCR5J0AMFoNdEwmKpFdn5sfrDU4F7mLU0Y",
  authDomain: "project-d5f5f.firebaseapp.com",
  projectId: "project-d5f5f",
  storageBucket: "project-d5f5f.appspot.com",
  messagingSenderId: "428466228219",
  appId: "1:428466228219:web:3a58a6732f5bcb81fe995e",
  measurementId: "G-HTWHS69Y0D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}