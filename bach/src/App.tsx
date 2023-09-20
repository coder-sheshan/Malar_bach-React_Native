import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square,home, flower, shield } from 'ionicons/icons';
import Tab1 from './pages/home';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Inroduction from './pages/Introduction';
import Feeling from './pages/Feeling';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Flowers from './pages/Flowers';
import FlowerPage from './pages/FlowerPage';
import Remedy from './pages/Remedy';
import About from './pages/About';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/intro">
            <Inroduction />
          </Route>
          <Route exact path="/feel">
            <Feeling />
          </Route>
          <Route exact path="/flowers">
            <Flowers />
          </Route>
          <Route exact path="/flowerpage:id">
            <FlowerPage />
          </Route>
          <Route exact path="/remedy">
            <Remedy />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar className='bottom' slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={home} />
            {/* <IonLabel>Home</IonLabel> */}
          </IonTabButton>
          {/* <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={flower} />
            <IonLabel>Flowers</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={shield} />
            <IonLabel>About</IonLabel>
          </IonTabButton> */}
        </IonTabBar>
        
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
