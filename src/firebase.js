import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPJhq3wpm_6FvCJgys_HuFckv-a2ksH38",
  authDomain: "clone-6d4f6.firebaseapp.com",
  projectId: "clone-6d4f6",
  storageBucket: "clone-6d4f6.appspot.com",
  messagingSenderId: "162595004971",
  appId: "1:162595004971:web:c88aa86f8d9268dbe7406e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
