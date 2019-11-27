import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDsJoGoOJeGgwTTbsPTSJn70fx5dcFow8s",
    authDomain: "crwn-db-f1f81.firebaseapp.com",
    databaseURL: "https://crwn-db-f1f81.firebaseio.com",
    projectId: "crwn-db-f1f81",
    storageBucket: "crwn-db-f1f81.appspot.com",
    messagingSenderId: "370610951072",
    appId: "1:370610951072:web:e0be0c967d9bf2b94f8ac5",
    measurementId: "G-ZDKWMK8DME"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;
	
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	
	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	
	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;