// import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";
// import auth from "../firebase/firebase.config";
// import axios from "axios";

// export const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const googleProvider = new GoogleAuthProvider();


//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password)
//   }
//   const signIn = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password)
//   }

//   const googleSignIn = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//   }

//   const logOut = () => {
//     setLoading(true);
//     return signOut(auth);
//   }

//   const updateUserProfile = (name, photo) => {
//     return updateProfile(auth.currentUser, {
//       displayName: name, photoURL: photo
//     });
//   }


//   // save user
//   const saveUser = async user => {
//     const currentUser = {
//       email: user?.email,
//       role: 'normal',
//       status: 'Verified',
//     }
//     const { data } = await axios.put(`http://localhost:5000/user`, currentUser)
//     return data;
//   }

//   // const saveUser = async (user) => {
//   //   if (!user || !user.email) {
//   //     console.error("Invalid user object passed to saveUser", user);
//   //     return;
//   //   }
  
//   //   const currentUser = {
//   //     email: user?.email,
//   //     role: 'normal',
//   //     status: 'Verified',
//   //   };
  
//   //   try {
//   //     const { data } = await axios.put(`http://localhost:5000/user`, currentUser);
//   //     return data;
//   //   } catch (error) {
//   //     console.error("Error saving user", error);
//   //   }
//   // };


//   // useEffect(() => {
//   //   const unsubscribe = onAuthStateChanged(auth, currentUser => {
//   //     setUser(currentUser);
//   //     if (currentUser) {
//   //       saveUser();
//   //       console.log("New User's Data saved in db");
//   //     }
//   //     console.log('current user', currentUser);
//   //     setLoading(false);
//   //   });
//   //   return () => {
//   //     return unsubscribe();
//   //   }
//   // }, [])


//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//       setUser(currentUser);
  
//       if (currentUser) {
//         await saveUser(currentUser);  // Pass the currentUser object
//         console.log("New User's Data saved in db");
//       }
  
//       console.log('current user', currentUser);
//       setLoading(false);
//     });
  
//     return () => {
//       return unsubscribe();
//     };
//   }, []);
  

//   const authInfo = {
//     user,
//     setUser,
//     loading,
//     createUser,
//     signIn,
//     googleSignIn,
//     logOut,
//     updateUserProfile

//   }
//   return (
//     <AuthContext.Provider value={authInfo}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;





import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    });
  };


  // Save user
  const saveUser = async (user) => {
    const currentUser = {
      email: user?.email,
      role: 'normal',
      status: 'Verified',
    };
    try {
      const { data } = await axios.put('http://localhost:5000/user', currentUser);
      console.log('Save user response:', data);
      return data;
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await saveUser(currentUser); // Pass the currentUser object
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
