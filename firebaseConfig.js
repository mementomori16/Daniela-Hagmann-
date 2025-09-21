// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB27pU0yguMvW45JYjqDkiddk0t3yaF2Jg",
    authDomain: "test-1-dd24e.firebaseapp.com",
    projectId: "test-1-dd24e",
    storageBucket: "test-1-dd24e.firebasestorage.app",
    messagingSenderId: "990840142499",
    appId: "1:990840142499:web:8eda74f077a6c5feaf5d16",
    measurementId: "G-1XLLHWCY4J"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize services
const db = firebase.firestore();
const auth = firebase.auth();