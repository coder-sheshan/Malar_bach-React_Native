import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonList,
  IonIcon,
} from "@ionic/react";
import { chevronBack } from 'ionicons/icons';
import { useIonRouter} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Feeling.css";
import ImageContainer from "../components/ImageContainer";
import { IonRouterLink } from "@ionic/react";

const Feeling: React.FC = () => {

    const router = useIonRouter();

    const handleCustomBack = () => {
        // Custom logic before navigating back
        // For example, show a confirmation dialog
        // const confirm = window.confirm('Do you want to go back?');
        // if (true) {
          router.goBack(); // Navigate back
        // }
      };
  return (
    <IonPage className="page">
      <IonHeader>
      <IonToolbar>
          <IonTitle className="hello">
            <IonIcon
              style={{ float: "left" }}
              onClick={handleCustomBack}
              aria-hidden="true"
              icon={chevronBack}
            />
            உணர்வுகள்
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="lists">
          <IonList inset={true}>
          <IonRouterLink routerLink={`/flowerpage${2}`}>
            <IonItem>
              <IonLabel><p>பயம்</p></IonLabel>
            </IonItem>
          </IonRouterLink>  
            <IonItem>
              <IonLabel><p>தனிமை</p></IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel><p>நிச்சயமற்ற தன்மை</p></IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel><p>அதிக கோபம்</p></IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel><p>மனச்சோர்வு</p></IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel><p>மன அழுத்தம்</p></IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel><p>அதிக சோகம்</p></IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel><p>தற்கொலை தன்மை</p></IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel><p>அதிக சந்தேகம்</p></IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel><p>அதிகப்படியான யோசனை</p></IonLabel>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feeling;
