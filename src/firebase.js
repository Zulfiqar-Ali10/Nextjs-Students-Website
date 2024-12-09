import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-JJJC_DnEW1NlTerPPZv6Z0HXapu8QTM",
  authDomain: "login-with-nextjs-f80b1.firebaseapp.com",
  projectId: "login-with-nextjs-f80b1",
  storageBucket: "login-with-nextjs-f80b1.firebasestorage.app",
  messagingSenderId: "582210505046",
  appId: "1:582210505046:web:41adfbafbf1648c98b2ef7",
  measurementId: "G-D9LZK8Z20V"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);