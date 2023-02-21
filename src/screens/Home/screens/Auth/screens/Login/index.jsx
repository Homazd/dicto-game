import {IonButton, IonCheckbox, IonIcon, IonInput, IonItem, IonLabel, IonNote,} from "@ionic/react";
import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import { useIonAlert } from "@ionic/react";

// import {BiShow} from "react-icons/bi";

//utils
import { getUser} from "./utils/get-user.util";
import { signInUser} from "./utils/sign-in.util";

export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const History = useHistory();
  useEffect(() => {
    if (localStorage.getItem("username")) {
      History.push("/")
    }
  }, [])
  // async function handleSubmit(e) {
  //   e.preventDefault()
  //
  //   // Get email and password input values
  //
  //   // Calls `signIn` function from the context
  //   const { error } = await signIn({ email, password })
  //
  //   if (error) {
  //     alert('error signing in')
  //   } else {
  //     // Redirect user to Dashboard
  //     History.push('/')
  //   }
  //
  //   localStorage.setItem("token", JSON.stringify(`${email}${password}`));
  //   redirect();
  //
  // }
  const [presentAlert] = useIonAlert();

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onChangePassword(e) {
    const password = e.target.value;
    setPassword(password);
  }

  function handleSubmit() {
    if (!password.length || !email.length) {
      presentAlert({
        header: "Alert",
        message: "please enter fill all the fields",
        buttons: ["OK"],
      });
    } else {
      signInUser(email, password).then((data) => {
        if (data) {
          getUser(email);
          History.push("/");
        }
      });
    }
  }
  //
  // function redirect() {
  //   const callbackURI = new URLSearchParams(location.search).get("callbackURI");
  //   if (callbackURI) {
  //     history.push(callbackURI);
  //   } else history.push("/");
  // }
  //
  // function togglePasswordText() {}

  return (
    <>
      <IonItem>
        <IonLabel position="floating">Username</IonLabel>
        <IonInput
            required={true}
            onIonInput={onChangeEmail}
            value={email}
            placeholder="Please enter your email"
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
        ></IonInput>
        {/*<IonIcon slot="end" icon={BiShow} onClick={togglePasswordText}>*/}
        {/*  {" "}*/}
        {/*</IonIcon>*/}
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
