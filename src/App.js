import React from "react";
import { setupIonicReact } from "@ionic/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import { PrivateRoute } from "./components/PrivateRoute";
import { HomeScreen } from "./screens/Home";
import { QuizScreen } from "./screens/Home/screens/Quiz";
import { ResultsScreen } from "./screens/Home/screens/Results";
import { SignUpScreen } from "./screens/Home/screens/Auth/screens/SignUp";
import { LoginScreen } from "./screens/Home/screens/Auth/screens/Login";

setupIonicReact();

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/quiz" element={<QuizScreen />} />;
            <Route path="/result" element={<ResultsScreen />} />;
          </Route>
          <Route path="/auth/login" element={<LoginScreen />} />;
          <Route path="/auth/signUp" element={<SignUpScreen />} />;
        </Switch>
    </BrowserRouter>
  );
}

export default App;
