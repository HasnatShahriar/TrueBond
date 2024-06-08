import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  }

  const googleSignIn = async () => {
    setLoading(true);
    try {
      return await signInWithPopup(auth, googleProvider);
    } finally {
      setLoading(false);
    }
  }

  const logOut = async () => {
    setLoading(true);
    try {
      return await signOut(auth);
    } finally {
      setLoading(false);
    }
  }

  const updateUserProfile = async (name, photo) => {
    setLoading(true);
    try {
      if (auth.currentUser) {
        return await updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
      }
    } finally {
      setLoading(false);
    }
  }

  const createUser = async (email, password, displayName) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName });
      return userCredential.user;
    } catch (error) {
      console.error("Error creating user", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const saveUser = async (user) => {
    if (!user || !user.email || !user.displayName) {
      console.error("Invalid user object passed to saveUser", user);
      return;
    }

    const userData = {
      name: user.displayName,
      email: user.email,
      role: 'normal',
      status: 'Verified',
    };

    console.log('User data to be sent:', userData);

    try {
      const { data } = await axios.put(`https://true-bond-server.vercel.app/user`, userData);
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error saving user", error);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        try {
          await saveUser(currentUser);
          console.log("New User's Data saved in db");

          const loggedUser = { email: currentUser.email };
          const { data: tokenResponse } = await axios.post(`https://true-bond-server.vercel.app/jwt`, loggedUser, { withCredentials: true });
          console.log('Token response', tokenResponse);
        } catch (error) {
          console.error("Error during user save or token issuance", error);
        }
      } else {
        const loggedUser = { email: user?.email };
        try {
          const { data: logoutResponse } = await axios.post(`https://true-bond-server.vercel.app/logout`, loggedUser, { withCredentials: true });
          console.log(logoutResponse);
        } catch (error) {
          console.error("Error during logout", error);
        }
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [user?.email]);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;




