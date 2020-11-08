import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDLlj_WX_7TbtFP6ORGiiWJx7jVqmafpPY",
  authDomain: "instagram-clone-863bf.firebaseapp.com",
  databaseURL: "https://instagram-clone-863bf.firebaseio.com",
  projectId: "instagram-clone-863bf",
  storageBucket: "instagram-clone-863bf.appspot.com",
  messagingSenderId: "949092266313",
  appId: "1:949092266313:web:7629dc9991ba5acad2aa98",
  measurementId: "G-RKYQNGGMBV",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
