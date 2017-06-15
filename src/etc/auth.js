import app from "etc/firebase"

const auth = app.auth()

export function authenticate(emailAddress, password) {
  return auth.signInWithEmailAndPassword(emailAddress, password)
}

export default auth
