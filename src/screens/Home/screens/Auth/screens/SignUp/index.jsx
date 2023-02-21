import React, {useEffect, useState} from "react";
import {IonButton, IonInput, IonItem, IonLabel, IonNote, useIonAlert} from "@ionic/react";
import {Link, useHistory} from "react-router-dom";

// Utils

import {isRepeated} from "./Utils/repeated-username";
import {newUser} from "./Utils/new-user.util";
import {signUp} from "./Utils/sign-up.util";

export function SignUpScreen() {
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const History = useHistory();

    useEffect(() => {
        if (localStorage.getItem("username")) {
            console.log("you're logged in!")
            History.push("/")
        }
    }, [])

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
    const [presentAlert] = useIonAlert();

    const onChangeSignIn = () => {
        if (!username.length || !password.length || !email.length) {
            presentAlert({
                header: "Alert",
                message: "please enter fill all the fields",
                buttons: ["OK"],
            });
        } else {
            isRepeated(username).then((isUnique) => {
                if (isUnique) {
                    localStorage.clear();
                    signUp(email, password).then((data) => {
                        if (data) {
                            newUser(username, email);
                            History.push("/");
                        }
                    });
                } else {
                    presentAlert({
                        header: "Alert",
                        message: "username is taken by another user please use another one",
                        buttons: ["OK"],
                    });
                }
            });
        }
    };

    return (
        <>

            <IonItem
                fill="outline"
                className={`${isValid && "ion-valid"} ${
                    isValid === false && "ion-invalid"
                } ${isTouched && "ion-touched"}`}
            >
                <IonLabel position="floating">Email</IonLabel>
        <IonInput
          type="email"
          onIonInput={(event) => validate(event)}
          onIonBlur={() => markTouched()}
          placeholder="Enter a valid email (example@domain)"

        ></IonInput>
        <IonNote slot="error">Invalid email</IonNote>
      </IonItem>
      <IonItem fill="outline">
        <IonLabel position="floating">Username</IonLabel>
        <IonInput></IonInput>
      </IonItem>
      <IonItem fill="outline">
          <IonLabel position="floating">
              Password
          </IonLabel>
          <IonInput type="password"></IonInput>
      </IonItem>
      <IonItem fill="outline">
        <IonLabel position="floating">Confirm Password</IonLabel>
        <IonInput type="password"></IonInput>
      </IonItem>

            <IonButton type="submit" onClick={onChangeSignIn}>Register</IonButton>
            <br/>
      <IonNote>
        Already hava an account? <Link to="/auth/signUp">SignUp</Link>{" "}
      </IonNote>
    </>
  );
}
