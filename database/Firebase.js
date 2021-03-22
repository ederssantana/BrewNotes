import firebase from 'firebase'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB1Xvu-4jOe6mTsGAsXtCREdPuf0ttsmk0",
    authDomain: "brewnotes-2e06d.firebaseapp.com",
    projectId: "brewnotes-2e06d",
    storageBucket: "brewnotes-2e06d.appspot.com",
    messagingSenderId: "581770727900",
    appId: "1:581770727900:web:8d4f0869faa74fe403ff19"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
    firebase,
    db,
}