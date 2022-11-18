import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCwfL5QuB8vznPsSid6jPWSURGUAkg781k",
    authDomain: "financial-4b4e4.firebaseapp.com",
    projectId: "financial-4b4e4",
    storageBucket: "financial-4b4e4.appspot.com",
    messagingSenderId: "242733589848",
    appId: "1:242733589848:web:b51be34f4730bc1375312d"
  };

 if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig);
 }

 export default firebase;