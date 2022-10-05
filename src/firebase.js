// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDNz-lRZ9Z2T7WGeSHJERxDHt0xjpzbt7w',
  authDomain: 'realtorclone-5df8e.firebaseapp.com',
  projectId: 'realtorclone-5df8e',
  storageBucket: 'realtorclone-5df8e.appspot.com',
  messagingSenderId: '26188813741',
  appId: '1:26188813741:web:2e8a85746b436c9f45fd24',
  measurementId: 'G-JH0NG1D4C5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
