import {
  IonButton,
  IonCheckbox,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonNote,
} from "@ionic/react";
import React, { useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiShow } from "react-icons/bi";

export function LoginScreen() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onChangeUsername(e) {
    e.preventDefault();
    const username = e.target.value;
    setUsername(username);
  }

  function onChangePassword(e) {
    e.preventDefault();
    const password = e.target.value;
    setPassword(password);
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("token", JSON.stringify(`${username}${password}`));
    redirect();
  }

  function redirect() {
    const callbackURI = new URLSearchParams(location.search).get("callbackURI");
    if (callbackURI) {
      navigate(callbackURI);
    } else navigate("/");
  }

  function togglePasswordText() {}

  return (
    <>
      <IonItem>
        <IonLabel position="floating">Username</IonLabel>
        <IonInput
          required={true}
          onIonInput={onChangeUsername}
          value={username}
          placeholder="Enter UserName"
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput
          required={true}
          onIonInput={onChangePassword}
          value={password}
          type="password"
          placeholder="Enter Password"
          ref={passwordRef}
        ></IonInput>
        <IonIcon slot="end" icon={BiShow} onClick={togglePasswordText}>
          {" "}
        </IonIcon>
      </IonItem>
      <IonItem>
        <IonCheckbox slot="start"></IonCheckbox>
        <IonLabel>Remember me</IonLabel>
      </IonItem>
      <IonButton onClick={handleSubmit}>SignIn</IonButton>
      <IonNote>
        Don't hava an account? <Link to="/auth/signUp">SignUp</Link>{" "}
      </IonNote>
    </>
  );
}
