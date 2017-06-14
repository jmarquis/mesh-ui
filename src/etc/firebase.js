import firebase from "firebase"
import { log } from "etc/logger"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCTPFo6DFO_86-vnFJNH4UlsY18LjbgpG8",
  authDomain: "notes-9b1c4.firebaseapp.com",
  databaseURL: "https://notes-9b1c4.firebaseio.com",
  storageBucket: "notes-9b1c4.appspot.com",
  messagingSenderId: "530417976720"
}, "mesh")

log(`firebase app initialized: ${app.name}`)

export default app
