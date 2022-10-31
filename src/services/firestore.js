// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  query,
  where,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhYWFrgL7lLiNw6Sc23AX4yiZt8pQYKs8",
  authDomain: "curlyqueens37555-f0359.firebaseapp.com",
  projectId: "curlyqueens37555-f0359",
  storageBucket: "curlyqueens37555-f0359.appspot.com",
  messagingSenderId: "980055198075",
  appId: "1:980055198075:web:b7e948fe3c0b87cec215de",
  measurementId: "G-XSJ6ZHNVE4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems() {
  const myCollection = collection(firestore, "productos");
  let snapShotDB = await getDocs(myCollection);
  let dataDocs = snapShotDB.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });

  return dataDocs;
}

export async function getSingleItem(idParams) {
  const docRef = doc(firestore, "productos", idParams);
  const docSnapshot = await getDoc(docRef);
  const docFormateado = { ...docSnapshot.data(), id: docSnapshot.id };
  return docFormateado;
}

export async function getItemsByCategory(catParams) {
  const collectionRef = collection(firestore, "productos");
  const queryCat = query(collectionRef, where("categoria", "==", catParams));
  const respuesta = await getDocs(queryCat);
  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });
  return dataDocs;
}

export async function createBuyOrder(orderData) {
  const collectionRef = collection(firestore, "orders");
  let respuesta = await addDoc(collectionRef, orderData);

  return respuesta.id;
}

export default firestore;
