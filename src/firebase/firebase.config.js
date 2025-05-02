// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHjQqYvxHtAncMEdKZjyKYdpszqdlqkbM",
  authDomain: "trip-maldives.firebaseapp.com",
  projectId: "trip-maldives",
  storageBucket: "trip-maldives.firebasestorage.app",
  messagingSenderId: "400904294937",
  appId: "1:400904294937:web:db956acf01678fd6659088"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app