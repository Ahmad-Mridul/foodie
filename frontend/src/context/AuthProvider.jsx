import { useEffect, useState } from "react";
import { AuthContext } from "./useAuth";
import {
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../firebase/firebase.init";
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
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
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("User signed in:", user);
                setUser(user);
                setLoading(false);
            } else {
                console.log("No user signed in");
                setUser(null);
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
        signInUserEmailPass
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
