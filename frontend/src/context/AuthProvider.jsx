import { useEffect, useState } from "react";
import { AuthContext } from "./useAuth";
import axios from "axios";
import {
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    FacebookAuthProvider,
    updateProfile,
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
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user); // handles reloads
                setLoading(false);
                const userInfo = { email: user.email };
                axios
                    .post("http://localhost:3000/jwt", userInfo)
                    .then((res) => {
                        if (res.data.token) {
                            localStorage.setItem(
                                "access-token",
                                res.data.token
                            );
                        }
                    });
            } else {
                setUser(null);
                setLoading(false);
                localStorage.removeItem("access-token");
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
        updateUserProfile,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
