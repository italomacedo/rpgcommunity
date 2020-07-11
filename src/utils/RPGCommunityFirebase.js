import * as firebase from 'firebase';

const RPGCommunityFirebase = {
    firebase: firebase,
    firestore: null,

    firebaseConfig: {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID
    },

    initFireBase: function () {
        RPGCommunityFirebase.firebase.initializeApp(RPGCommunityFirebase.firebaseConfig);
        RPGCommunityFirebase.firestore = RPGCommunityFirebase.firebase.firestore();
        RPGCommunityFirebase.firebase.analytics();
    },

    uiConfig: function () {
        return {
            // Popup signin flow rather than redirect flow.
            signInFlow: 'popup',
            // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
            signInSuccessUrl: '/signedIn',
            // We will display Google and Facebook as auth providers.
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID
            ]
        };
    },

    ui: function () {
        return new RPGCommunityFirebase.firebaseui.auth.AuthUI(RPGCommunityFirebase.firebase.auth());
    },

    uiStart: function () {
        RPGCommunityFirebase.ui().start('#firebaseui-auth-container', RPGCommunityFirebase.uiConfig());
    }
}

export default RPGCommunityFirebase;