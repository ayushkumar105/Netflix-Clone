import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBmiU0hmwrY9CMqKIM5I_dyYI72YIFmbrs",
    authDomain: "netflix-clone-e2628.firebaseapp.com",
    projectId: "netflix-clone-e2628",
    storageBucket: "netflix-clone-e2628.appspot.com",
    messagingSenderId: "353112623292",
    appId: "1:353112623292:web:b13c5a61e5ec94c803e8b9",
    measurementId: "G-YKB6JQSM7M"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export { auth };
  export default db;