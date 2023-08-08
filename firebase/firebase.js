import { initializeApp } from "firebase/app";

import { getAuth } from"firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRbOo8xlzXfdSYhKz2fr1wV4U9xPQl4eQ",
  authDomain: "fir-chat-app-b6e9c.firebaseapp.com",
  projectId: "fir-chat-app-b6e9c",
  storageBucket: "fir-chat-app-b6e9c.appspot.com",
  messagingSenderId: "318171799228",
  appId: "1:318171799228:web:2ed35d8d5e6bc8db75fab9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);