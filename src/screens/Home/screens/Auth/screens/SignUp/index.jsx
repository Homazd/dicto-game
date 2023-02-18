import React, { useState, useRef } from "react";
import { IonButton, IonInput, IonItem, IonLabel, IonNote } from "@ionic/react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../../../../contexts/Auth";

export function SignUpScreen() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null)


  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const { signUp } = useAuth();
  const history = useHistory();

  const email = emailRef.current.value;
  const password = passwordRef.current.value;

 

  const validateEmail = (email) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const validate = (ev) => {
    const value = ev.target.value;
    setIsValid(undefined);

    if (value === "") return;
    validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    
    // Get email and password input values
    const email = emailRef.current.value
    const password = passwordRef.current.value

    // Calls `signIn` function from the context
    const { error } = await signUp({ email, password })

    if (error) {
      alert('error signing in')
    } else {
      // Redirect user to Dashboard
      history.push('/')
    }
  
  }

  return (
    <>
      <IonItem fill="outline">
        <IonLabel position="floating">Firstname</IonLabel>
        <IonInput></IonInput>
      </IonItem>
      <IonItem fill="outline">
        <IonLabel position="floating">LastName</IonLabel>
        <IonInput></IonInput>
      </IonItem>
      <IonItem
        fill="outline"
        className={`${isValid && "ion-valid"} ${
          isValid === false && "ion-invalid"
        } ${isTouched && "ion-touched"}`}
        onSubmit={handleSubmit}
      >
        <IonLabel position="floating">Email</IonLabel>
        <IonInput
          type="email"
          onIonInput={(event) => validate(event)}
          onIonBlur={() => markTouched()}
          placeholder="Enter a valid email (example@domain)"
          ref={emailRef}
        ></IonInput>
        <IonNote slot="error">Invalid email</IonNote>
      </IonItem>
      <IonItem fill="outline">
        <IonLabel position="floating">Username</IonLabel>
        <IonInput></IonInput>
      </IonItem>
      <IonItem fill="outline">
        <IonLabel position="floating" ref={passwordRef}>
          Password
        </IonLabel>
        <IonInput type="password"></IonInput>
      </IonItem>
      <IonItem fill="outline">
        <IonLabel position="floating">Confirm Password</IonLabel>
        <IonInput type="password"></IonInput>
      </IonItem>

      <IonButton type="submit">Register</IonButton>
      <br />
      <IonNote>
        Already hava an account? <Link to="/auth/signUp">SignUp</Link>{" "}
      </IonNote>
    </>
  );
}
