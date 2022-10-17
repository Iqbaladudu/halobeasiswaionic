import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

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

/* Tailwind styles */
import "./theme/tailwind.css";

/* Theme variables */
import "./theme/variables.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import OnboardingIndex from "./pages/Onboarding/OnboardingIndex";
import { Route } from "react-router";
import Home from "./pages/Menu/Home";
import StudyAbroad from "./pages/StudyAbroad/StudyAbroad";
import StudyAbroadMenuDetail from "./pages/StudyAbroad/StudyAbroadMenuDetail/StudyAbroadMenuDetail";

setupIonicReact();

const App: React.FC = () => (
  <Provider store={store}>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/menu" component={Home} />
          <Route path="/studyAbroad" component={StudyAbroad} />
          <Route
            path="/studyAbroadMenuDetail"
            component={StudyAbroadMenuDetail}
          />
          <OnboardingIndex />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </Provider>
);

export default App;
