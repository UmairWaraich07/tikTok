import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0jJOXwdmH3HJJjJcrgdflEhh9clga8QU",
  authDomain: "tik-tok-clone-8b214.firebaseapp.com",
  projectId: "tik-tok-clone-8b214",
  storageBucket: "tik-tok-clone-8b214.appspot.com",
  messagingSenderId: "324546620373",
  appId: "1:324546620373:web:d930eb46a4651ca7a6ab5c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
