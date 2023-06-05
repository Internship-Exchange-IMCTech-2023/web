import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBJVc_3Ln8V7VD0Jsqxv_uXE0YphCxdNOE",
    authDomain: "fefu-blog.firebaseapp.com",
    projectId: "fefu-blog",
    storageBucket: "fefu-blog.appspot.com",
    messagingSenderId: "575201783375",
    appId: "1:575201783375:web:1927a866a6cad85b15443a",
    measurementId: "G-RCZRRDFD4G"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export { auth, db, storage };