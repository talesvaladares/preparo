import firebase from 'firebase';

const firebaseConfig = {
    

    apiKey: "AIzaSyAr75ql7Ip0q1-DC5is6bVLbXxgQKElriM",
    authDomain: "preparo-26334.firebaseapp.com",
    projectId: "preparo-26334",
    storageBucket: "preparo-26334.appspot.com",
    messagingSenderId: "882932852223",
    appId: "1:882932852223:web:deaf838c4d12055cd6b3ca"

}

export const authFireBase = firebase.initializeApp(firebaseConfig);

