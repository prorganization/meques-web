import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCsAVK8C19zK409gAiwbg84tHf2uT6rFL4",
    authDomain: "meques-6925c.firebaseapp.com",
    projectId: "meques-6925c",
    storageBucket: "meques-6925c.appspot.com",
    messagingSenderId: "174450290932",
    appId: "1:174450290932:web:0bba90e3b09e08a58baea1",
    measurementId: "G-T4YD2XHK7L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
setPersistence(auth, browserLocalPersistence)

export default app
