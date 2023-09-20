import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardContent,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./home.css";
import ImageContainer from "../components/ImageContainer";
import { IonRouterLink } from "@ionic/react";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="hello">
            <h2 style={{ color: "deeppink", fontSize: "30px" }}>
              {" "}
              மலர் மருத்துவம்
            </h2>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="content">
          <IonImg
            style={{ padding: "10px" }}
            src="https://i.pinimg.com/474x/12/6c/c9/126cc9ea43f6008797bde6d6d632bb6b.jpg"
            alt="Home Img"
          />
        </div>{" "}
        <div className="home-topics">
          <IonRouterLink routerLink="/intro">
            <h3>அறிமுகம்</h3>
          </IonRouterLink>
          <IonRouterLink routerLink="/feel">
            <h3>நீங்கள் என்ன உணர்கிறீர்கள்?</h3>
          </IonRouterLink>
          <IonRouterLink routerLink="/flowers">
            <h3>மலர்கள்</h3>
          </IonRouterLink>
          <IonRouterLink routerLink="/remedy">
            <h3>எப்படி வைத்தியம் எடுக்க வேண்டும்?</h3>
          </IonRouterLink>
          <IonRouterLink routerLink="/about">
            <h3>செயலி பற்றி</h3>
          </IonRouterLink>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
