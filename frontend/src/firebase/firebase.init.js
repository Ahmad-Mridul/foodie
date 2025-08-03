// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFImaICmG_ThjEzxs1PHCST2uU5VKdlCs",
    authDomain: "coffe-store-d8631.firebaseapp.com",
    projectId: "coffe-store-d8631",
    storageBucket: "coffe-store-d8631.firebasestorage.app",
    messagingSenderId: "20626359314",
    appId: "1:20626359314:web:fc1c91353a5881d10944cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;