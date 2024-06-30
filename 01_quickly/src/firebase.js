import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  getAuth,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBKqcnuCzYIw-zXIJkiuZzB6cgFUT_EENI",
  authDomain: "quickly-2db4e.firebaseapp.com",
  projectId: "quickly-2db4e",
  storageBucket: "quickly-2db4e.appspot.com",
  messagingSenderId: "918240579099",
  appId: "1:918240579099:web:95ae6e918db8eba23032be",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign Up
const signUp = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    console.log("Sign Up Successfully", response.user);
    toast.success("Sign Up Successfully");
  } catch (error) {
    console.log("Sign Up Error:", error.message);
    toast.error(error.code.split("/")[1].split("_").join(" "));
  }
};

// Sign In
const signIn = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log("Sign In Successfully", response.user);
    toast.success("Sign In Successfully");
  } catch (error) {
    console.log("Sign In Error:", error.message);
    toast.error(error.code.split("/")[1].split("_").join(" "));
  }
};

// LogOut

const logOut = async () => {
  try {
    await signOut(auth);
    toast.success("Log Out Successfully");
  } catch (error) {
    console.log("Log Out Error", error.message);
    toast.error(error.code.split("/")[1].split("_").join(" "));
  }
};

// Reset Password

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.log("Reset Password Failed:", error.message);
    toast.error(error.code.split("/")[1].split("_").join(" "));
  }
};

export { auth, db, signUp, signIn, logOut, resetPassword };
