import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDnI2SucNOBJetCQbLNGbiGTijKn44bDMg',
  authDomain: 'chatvia-6d767.firebaseapp.com',
  projectId: 'chatvia-6d767',
  storageBucket: 'chatvia-6d767.appspot.com',
  messagingSenderId: '64296753142',
  appId: '1:64296753142:web:01b4262236e016c792d9d7',
  measurementId: 'G-R3Q70W3C2J',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
