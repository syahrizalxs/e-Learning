import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDQXN1_E42NLKw-mULdVkHZGPVFxT-CZuo',
  authDomain: 'testfb-1bd82.firebaseapp.com',
  databaseURL: 'https://testfb-1bd82.firebaseio.com',
  projectId: 'testfb-1bd82',
  storageBucket: 'testfb-1bd82.appspot.com',
  messagingSenderId: '209421811780',
  appId: '1:209421811780:web:6e4db86facc70900577c11'
}
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig)
