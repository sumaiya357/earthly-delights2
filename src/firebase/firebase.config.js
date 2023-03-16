// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import 'firebase/auth';
// import 'firebase/storage';
// import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey ,
  authDomain: process.env.REACT_APP_authDomain ,
  projectId: process.env.REACT_APP_projectId ,
  storageBucket: process.env.REACT_APP_storageBucket ,
  messagingSenderId: process.env.REACT_APP_messagingSenderId ,
  appId: process.env.REACT_APP_appId ,
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
//  const useFirestore = (collection) => {
//   const [docs, setDocs] = useState([]);

//   useEffect(() => {
//     const subscribe = firestoreApp.collection(collection).onSnapshot((snap) => {
//       let documents = [];
//       snap.forEach((doc) => {
//         documents.push({ ...doc.data(), id: doc.id });
//       });

//       setDocs(documents);
//     });

//     return () => subscribe();
//   }, [collection]);

//   return { docs };
// };
 export default app;
//  export const timestamp = initializeApp.firestore.FieldValue.serverTimestamp;
// export const firestoreApp = firebaseConfig.firestore();
// export const storageApp = firebaseConfig.storage();
// export const authApp = firebaseConfig.auth();