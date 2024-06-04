// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBfLSLUXlFTzVtUmJo5srRFAaCuDbMa58",
  authDomain: "car-doctor-client-79df2.firebaseapp.com",
  projectId: "car-doctor-client-79df2",
  storageBucket: "car-doctor-client-79df2.appspot.com",
  messagingSenderId: "544645650406",
  appId: "1:544645650406:web:7d72143157ac4a21f7e827"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;