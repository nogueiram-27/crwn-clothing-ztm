import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCOn9o4dCwszKxz4owMRHYE1i6VfLAdtp4",
    authDomain: "crwn-clothing-ztm-db-eee43.firebaseapp.com",
    projectId: "crwn-clothing-ztm-db-eee43",
    storageBucket: "crwn-clothing-ztm-db-eee43.appspot.com",
    messagingSenderId: "686744552792",
    appId: "1:686744552792:web:292d3f0deadd445ef5112d",
    measurementId: "G-H2Y1SLV186"
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();
        
      if (!snapShot.exists) {
        // create new user
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set ({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user.', error.message);
        }
      }

      return userRef;
  };

  export const upsertUserCartItemsDocuments = async (cartItems, userId) => {
    if (!userId) return;
    const userCartItemsCollection = firestore.collection('userCartItems');      
    const userCartItemsRef = await firestore.collection('userCartItems').where('userId', '==', userId).get()
        
    if (!userCartItemsRef.docs.length) {
        try {
            
            const newuserCartItemsDoc = userCartItemsCollection.doc();
            await newuserCartItemsDoc.set ({
                userId: userId,
                items: cartItems
            })
        } catch (error) {
            console.log('Error creating user cart items.', error.message);
        }
    } else {
        try {
            const userCartItemsDoc = userCartItemsCollection.doc(userCartItemsRef.docs[0].id)
            
            await userCartItemsDoc.update({
                items: cartItems
            })
        } catch (error) {
            console.log('Error updating user cart items.', error.message);
        }
    }
  } 

  export const getUserCartItems = async (userId) => {

      const userCartItemsDoc = await firestore.collection('userCartItems').where('userId', '==', userId)
        .get()
        .then((querySnapshot) => {
            if (!querySnapshot.docs.length) return [];
                const doc = querySnapshot.docs[0].data()
                const { items } = doc
                return items
            })
        return userCartItemsDoc
  }

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
      const collectionRef = firestore.collection(collectionKey);
      const batch = firestore.batch();

      objectsToAdd.forEach(obj => {
          const newDocRef = collectionRef.doc();
          batch.set(newDocRef, obj);      
      });

      return await batch.commit();
  }

  export const convertCollectionsSnapshotToMap = (collections) => {
        const transformedCollection = collections.docs.map((doc) => {
            const {title, items} = doc.data();
            return {
                routeName: encodeURI(title.toLowerCase()),
                id : doc.id,
                title,
                items
            }                         
        })
        return transformedCollection.reduce((accumulator, collection) => {
            accumulator[collection.title.toLowerCase()] = collection;
            return accumulator;           
        },{});
  }

  export const getCurrentUser = () => {
      return new Promise((resolve, reject) => {
          const unsubscribe = auth.onAuthStateChanged(userAuth => {
              unsubscribe();
              resolve(userAuth);
          }, reject)
      })
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
  //export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;