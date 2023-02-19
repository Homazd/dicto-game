import React from "react";
import {IonButton, IonContent, IonPage, IonSlide, IonSlides,} from "@ionic/react";


import "./index.css"
import {ModalMenu} from "./components/ModalMenu";
import {useHistory} from "react-router-dom";

const slideOpts = {
    initialSlide: 1,
    speed: 400
};

export function HomeScreen() {

    const history = useHistory()

    function letsStartQuiz() {
        history.push("/quiz", {
            state: {
                userId: "shohreh_userID",
            }
        });
    }

    return (
        <IonPage>
            <ModalMenu/>
            <IonContent>
                <IonSlides pager={true} options={slideOpts}>
                    <IonSlide>
                        <h1>Play with Friends</h1>
                    </IonSlide>
                    <IonSlide>
                        <h1>Have a fun time</h1>
                    </IonSlide>
                    <IonSlide>
                        <h1>easy to learn</h1>
                    </IonSlide>
                </IonSlides>
            </IonContent>
            <IonButton onClick={letsStartQuiz}>
                START PLAY
            </IonButton>
            <a> HOW TO PLAY?</a>

        </IonPage>
    );
}

// return (
//     <>
//         <Link to="/quiz">
//             Quiz
//         </Link>
//
//     </>
// )
//}