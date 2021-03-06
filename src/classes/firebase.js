import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  appId: process.env.REACT_APP_APP_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
    this.auth = app.auth();
    this.googleAuthProvider = new app.auth.GoogleAuthProvider();
  }

  doGoogleSignIn = () => this.auth.signInWithPopup(this.googleAuthProvider);

  doSignOut = () => this.auth.signOut();

  user = (uid) => this.db.ref(`user/${uid}`);

  ordersCount = () => this.db.ref('ordersCount');

  onAuthChangeListener = (next, fallback = () => {}) => {
    return this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then((snapshot) => {
            const dbUser = snapshot.val();
            const user = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              ...dbUser,
            };
            next(user);
          });
      } else {
        fallback();
      }
    });
  };
}

export default Firebase;
