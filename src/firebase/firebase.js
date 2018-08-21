import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyAkpUf0SLqOaQsEeQkVQK-RiLCq25k-Ez8',
  authDomain: 'world-sample-a826b.firebaseapp.com',
  databaseURL: 'https://world-sample-a826b.firebaseio.com',
  projectId: 'world-sample-a826b',
  storageBucket: 'world-sample-a826b.appspot.com',
  messagingSenderId: '383753912241'
}
firebase.initializeApp(config)
const database = firebase.database()

export default database
