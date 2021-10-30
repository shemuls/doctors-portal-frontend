import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../firebase.js";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  /**
   * h
   */
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  /**
   * Firebase Sign Up Function
   * @param {*} email
   * @param {*} password
   * @param {*} name
   */
  async function signUp(email, password, name) {
    setLoading(true);
    const auth = getAuth();

    await createUserWithEmailAndPassword(auth, email, password);

    // update profile
    await updateProfile(auth.currentUser, {
      displayName: name,
    });

    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });

    setLoading(false);
  }

  // Firebase Login function
  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  // firebase Logout function
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  // Value for auth context
  const value = {
    signUp,
    currentUser,
    loading,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
