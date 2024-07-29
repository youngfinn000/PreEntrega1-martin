import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0KC3779PbCnVXthowKjgPqvPPJ698uew",
  authDomain: "tattoo-ink-a84ee.firebaseapp.com",
  projectId: "tattoo-ink-a84ee",
  storageBucket: "tattoo-ink-a84ee.appspot.com",
  messagingSenderId: "487541824066",
  appId: "1:487541824066:web:b7915a2684ea39c8ae6bdb",
  measurementId: "G-J67MDM14LB"
};

initializeApp(firebaseConfig);


const db = getFirestore()

export default db;