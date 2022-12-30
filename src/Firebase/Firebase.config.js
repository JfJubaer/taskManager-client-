// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByjk9Lev0U0En9dcNHc_bm1XUWbjn4Kt4",
    authDomain: "task-manager-3abf0.firebaseapp.com",
    projectId: "task-manager-3abf0",
    storageBucket: "task-manager-3abf0.appspot.com",
    messagingSenderId: "11278807146",
    appId: "1:11278807146:web:8bc9d1e3c36d8bacd5da13"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app;