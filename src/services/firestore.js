// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs,getDoc, doc,addDoc, query,where } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD40hNbmZ6rnvQVRUtzibWzY4P1kUglow",
  authDomain: "curlyqueens37555.firebaseapp.com",
  projectId: "curlyqueens37555",
  storageBucket: "curlyqueens37555.appspot.com",
  messagingSenderId: "939992891155",
  appId: "1:939992891155:web:ed225cf81cedb8538e64e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore= getFirestore(app)

export async function getItems(){
const myCollection = collection(firestore, "productos")
let snapShotDB= await getDocs(myCollection);
let dataDocs= snapShotDB.docs.map(documento=> {
  let docFormateado={...documento.data(), id:documento.id}
  return docFormateado;
});

return dataDocs;
}

export async function getSingleItem(idParams){
  const docRef= doc(firestore, "productos", idParams);
  const docSnapshot= await getDoc(docRef);
  const docFormateado={...docSnapshot.data(), id: docSnapshot.id}
  return docFormateado
}

export async function getItemsByCategory(catParams){
  const collectionRef= collection (firestore,"productos");
  const queryCat= query(collectionRef,where("categoria","==",catParams));
  const respuesta= await getDocs(queryCat)
  let dataDocs= respuesta.docs.map(documento=> {
    let docFormateado={...documento.data(), id:documento.id}
    return docFormateado;
})
return dataDocs
}

export async function createBuyOrder(orderData) {
  const collectionRef = collection(firestore, "orders");
  let respuesta = await addDoc(collectionRef, orderData);

  return respuesta.id;
}


export default firestore ;