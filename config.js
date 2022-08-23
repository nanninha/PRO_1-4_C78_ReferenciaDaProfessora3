import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDFnzAFIwWeNdWiDH7DIaIDOsG_THp6Vvc",
    authDomain: "e-books-22e6d.firebaseapp.com",
    projectId: "e-books-22e6d",
    storageBucket: "e-books-22e6d.appspot.com",
    messagingSenderId: "85790579966",
    appId: "1:85790579966:web:5e7148a1ed61e4340ad9af"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
