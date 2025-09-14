import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD_PchbeLQ5dEcDG0yb5yZ0y-6VCepO24w",
    authDomain: "linuxdicaspro-oficial.firebaseapp.com",
    databaseURL: "https://linuxdicaspro-oficial-default-rtdb.firebaseio.com",
    projectId: "linuxdicaspro-oficial",
    storageBucket: "linuxdicaspro-oficial.firebasestorage.app",
    messagingSenderId: "943976845263",
    appId: "1:943976845263:web:020518da859f8cd6c38cba",
    measurementId: "G-2ZM6LMLX1Y"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
