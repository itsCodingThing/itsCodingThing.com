import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
