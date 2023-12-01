// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_KEY,
//   authDomain: "video-7801c.firebaseapp.com",
//   projectId: "video-7801c",
//   storageBucket: "video-7801c.appspot.com",
//   messagingSenderId: "130073115219",
//   appId: "1:130073115219:web:365035e1474abbe7fba4a6",
// };

// const app = initializeApp(firebaseConfig);

// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcMd5yHF1lds1zx8KZHjqcKwOqLPm4HvA",
  authDomain: "ytclone-b2745.firebaseapp.com",
  projectId: "ytclone-b2745",
  storageBucket: "ytclone-b2745.appspot.com",
  messagingSenderId: "918181747846",
  appId: "1:918181747846:web:1026ae3b29f014059e4507",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
