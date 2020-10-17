import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcNqKzLaFY-WkGGn72tx1IKGDvhp4T4A0",
  authDomain: "imgreeim.firebaseapp.com",
  databaseURL: "https://imgreeim.firebaseio.com",
  projectId: "imgreeim",
  storageBucket: "imgreeim.appspot.com",
  messagingSenderId: "845941828238",
  appId: "1:845941828238:web:df8f5dda72a7a12f5bb7df",
  measurementId: "G-PLKBVPE4GH"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();

export const dbService = firebase.firestore();

export const storageService = firebase.storage();
