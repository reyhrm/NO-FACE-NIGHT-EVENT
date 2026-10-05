// Firebase web config. These values are public identifiers; access is controlled by firestore.rules.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDAkwOxFleXzyUT2nYPzJzTSHDkakGA_Ys",
  authDomain: "no-face-night.firebaseapp.com",
  projectId: "no-face-night",
  storageBucket: "no-face-night.firebasestorage.app",
  messagingSenderId: "701822646926",
  appId: "1:701822646926:web:7b079a9619149602e2a7df"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Keep CAPACITY and MAX_PER_PERSON in sync with firestore.rules (250 and 3).
export const CAPACITY = 250;
export const MAX_PER_PERSON = 3;
export const PRICE = 25;
export const ADMIN_EMAILS = ["reinaldohermelo2002@gmail.com", "willyekua.adjaba@gmail.com"];
