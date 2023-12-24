// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyCp0R6Tc-BPwzRx1hmmdIsuhDGHkUnHtSw",
	authDomain: "project-6a94b.firebaseapp.com",
	projectId: "project-6a94b",
	storageBucket: "project-6a94b.appspot.com",
	messagingSenderId: "647948347701",
	appId: "1:647948347701:web:a96654e2a8b6bd7bce447c",
	measurementId: "G-M1LLHVM8H7",
};
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { db, auth};
