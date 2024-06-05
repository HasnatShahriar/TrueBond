import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();


  // const createUser = (email, password) => {
  //   setLoading(true);
  //   return createUserWithEmailAndPassword(auth, email, password)
  // }
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    });
  }

  const createUser = async (email, password, displayName) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: displayName });
      return userCredential.user;
    } catch (error) {
      console.error("Error creating user", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  
  // When saving user data
  const saveUser = async (user) => {
    setLoading(true);
    if (!user || !user?.email || !user?.displayName) {
      console.error("Invalid user object passed to saveUser", user);
      return;
    }
  
    const userData = {
      name: user.displayName,
      email: user.email,
      role: 'normal',
      status: 'Verified',
    };
  
    // Logging user data before sending to the server
    console.log('User data to be sent:', userData);
  
    try {
      const { data } = await axios.put(`http://localhost:5000/user`, userData);
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error saving user", error);
    } finally {
      setLoading(false);
    }
  };
  


  // save user
  // const saveUser = async (user) => {
  //   setLoading(true);
  //   if (!user || !user.email) {
  //     console.error("Invalid user object passed to saveUser", user);
  //     return;
  //   }

    
  //   const userData = {
  //     name: user?.displayName,
  //     email: user?.email,
  //     role: 'normal',
  //     status: 'Verified',
     
  //   };


  //   // Logging user data before sending to the server
  //   console.log('User data to be sent:', userData);


  //   try {
  //     const { data } = await axios.put(`http://localhost:5000/user`, userData);
  //     console.log(data);
  //     return data;
  //   } catch (error) {
  //     console.error("Error saving user", error);
  //   }
  // };




  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        await saveUser(currentUser);  // Pass the currentUser object
        console.log("New User's Data saved in db");
      }

      console.log('current user', currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);


  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile

  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;











