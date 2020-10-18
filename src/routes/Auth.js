import React, { useState } from "react";
import { authService, firebaseInstance } from "../fbase";
const Auth = () => {
  const [password,setPassword] = useState("");
  const onChange = (event) => {
    const {
      target: {value},
    } = event;
    setPassword(value);
  }
  const validate = Boolean(password === "홍근혁이유섭");

    const onSocialClick = async (event) => {
      const {
        target: { name },
      } = event;
      let provider;
      provider = new firebaseInstance.auth.GoogleAuthProvider();
      await authService.signInWithPopup(provider);
    };
    return (
        <div className="auth">
        <input
        value={password}
        onChange={onChange}
        type="text"
        placeholder=" "
        maxLength={120}
        className="admin_password"
      />
      {validate &&
      <button onClick={onSocialClick} name="google" className="auth_btn">
      Administrator
      </button>
      }
        
      </div>
    );
};
export default Auth;
