import {
    getAuth,
    GoogleAuthProvider,
    OAuthProvider,
    signInWithPopup,
    UserCredential
} from 'firebase/auth';

const sesVar = 'INASAP_SES';

export const AuthService = {
    IsLoggedIn: () => {
        const locaUser = localStorage.getItem(sesVar);
        return locaUser !== null;
    },
    Logout() {
        getAuth().signOut();
        localStorage.clear();
        window.location.reload();
    },
    LoginWithGoogle() {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account',
            title: 'Hermes 7 Track'
        });

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                this.SaveSession(result);
            })
            .catch(console.error)
    },
    LoginWithMicrosoft() {
        const provider = new OAuthProvider('microsoft.com');
        provider.setCustomParameters({
            prompt: 'select_account',
            title: 'Hermes 7 Track'
        });

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(result => {
                this.SaveSession(result);
            })
            .catch(console.error)
    },
    SaveSession(result: UserCredential) {
        localStorage.setItem(sesVar, JSON.stringify({
            uid: result.user?.uid,
            email: result.user?.email,
            displayName: result.user?.displayName,
            photo: result.user?.photoURL
        }));
        window.location.reload();
    }
};