import React from "react";
import { authService, firebaseInstance } from "../fbase";
const Auth = () => {
    const onSocialClick = async (event) => {
      const {
        target: { name },
      } = event;
      let provider;
      provider = new firebaseInstance.auth.GoogleAuthProvider();
      await authService.signInWithPopup(provider);
    };
    return (
        <div>
        <button onClick={onSocialClick} name="google">
        Administrator
        </button>
      </div>
    );
};
export default Auth;
