// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, getDoc, doc, collection, getDocs, writeBatch} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMckb5V49wzOYa3lfhkJ3_fr-zWzgFjpM",
  authDomain: "clothings-ec4a9.firebaseapp.com",
  projectId: "clothings-ec4a9",
  storageBucket: "clothings-ec4a9.appspot.com",
  messagingSenderId: "308427855088",
  appId: "1:308427855088:web:e1c50f238835418e549e35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase storage
export const db = getFirestore(app)

// Storing user in the firestore database
export const createUserProfile = async (userAuth, additionalData) => {
  if(!userAuth) return;

  // if userAuth create a document called users in it a file with userAuth uid
  const usersRef = doc(db, `users/${userAuth.uid}`)

  // get the user info
  const snapShot = await getDoc(usersRef)

  // if user doesn't exist create a new user.
  if(!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date().toISOString();

    try {
      await setDoc(usersRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  // return the userRef
  return usersRef;
}

// Adding the SHOP Json to our firebase one time only
export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  // create a collection in the database with the argument passed
  const collectionRef = collection(db, collectionKey)

  const batch = writeBatch(db);

  // iterate through the array to add to the db, create a document of the collection ref and set with all of the objects in the array.
  objectsToAdd.forEach(obj => {
    const newDocRef = doc(collectionRef)

    // this takes the document ref and then the data to add
    batch.set(newDocRef, obj)
  });

  // add all the writes to the db as a single unit
  return await batch.commit();
}

// Getting the SHOP collections from firebase and converting it from an object to an array
export const convertCollectionSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  // converting the array of collection into an object.
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});

}

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);


// Create a google sign in provider
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  'prompt': 'select_account'
});

export const signInWithGoogle = () => signInWithPopup(auth, provider)


export default app;

