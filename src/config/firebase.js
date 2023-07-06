import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDoc,
  getDocs,

} from "firebase/firestore";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFfKoStoAA-4Uf3D5yvbNfkXoS0FUd84I",
  authDomain: "smit-store-fi.firebaseapp.com",
  projectId: "smit-store-fi",
  storageBucket: "smit-store-fi.appspot.com",
  messagingSenderId: "974679736605",
  appId: "1:974679736605:web:9988dd3a252a257726e1f4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const addUserToDBSignup = async (fullName, contact) => {
  const uid = auth.currentUser.uid;
  var userProfile = { email: "", fullName: "", contact: "" };
  userProfile.email = auth.currentUser.email;
  userProfile.fullName = fullName;
  userProfile.contact = contact;

  return setDoc(doc(db, "users", uid), userProfile);
};












export {
  auth,
  createUserWithEmailAndPassword,
  addUserToDBSignup,
  doc,
  db,
  collection,
  getDocs,
  ref,
  storage,
  uploadBytes,
  getDownloadURL,
  setDoc,
  getDoc,
  onAuthStateChanged
};
