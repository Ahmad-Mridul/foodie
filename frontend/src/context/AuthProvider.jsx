import { useEffect, useState } from "react";
import { AuthContext } from "./useAuth";
import {
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    FacebookAuthProvider,
} from "firebase/auth";
import auth from "../firebase/firebase.init";
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();
    const createUserWithGooglePopUp = () => {
        setLoading(false);
        return signInWithPopup(auth, provider);
    };
    const userSignOut = () => {
        return signOut(auth);
    };
    const createUserWithEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signInUserEmailPass = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const signInWithFacebook = () => {
        setLoading(false);
        return signInWithPopup(auth, fbProvider);
    };
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user); // handles reloads
                setLoading(false);
            } else {
                setUser(null);
                setLoading(false);
            }
        });
        return () => unSubscribe();
    }, []);

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUserWithGooglePopUp,
        userSignOut,
        createUserWithEmailPass,
        signInUserEmailPass,
        signInWithFacebook,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
