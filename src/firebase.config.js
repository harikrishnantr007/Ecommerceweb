
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import  {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAzcNz7Ygvh_poDxl111ZFhmF2L2twZM0I",
  authDomain: "ecommerce-f2b33.firebaseapp.com",
  projectId: "ecommerce-f2b33",
  storageBucket: "ecommerce-f2b33.firebasestorage.app",
  messagingSenderId: "817300147834",
  appId: "1:817300147834:web:03b8169999ce8785d1f5c3"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app)
export const storage=getStorage(app)
storage.maxUploadRetryTime = 600000;
export default app