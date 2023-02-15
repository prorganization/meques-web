import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDNCZu6C12HZPBw8SarAOXUZ22unQ22pK0",
    authDomain: "torque-kart.firebaseapp.com",
    projectId: "torque-kart",
    storageBucket: "torque-kart.appspot.com",
    messagingSenderId: "57760753962",
    appId: "1:57760753962:web:0c8f04b9cd4b0f41ef1653",
    measurementId: "G-SF0DG53LSS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
setPersistence(auth, browserLocalPersistence)

export default app
