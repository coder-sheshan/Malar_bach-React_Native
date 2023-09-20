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
  IonIcon,
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import "./Introduction.css";
import ImageContainer from "../components/ImageContainer";
import { useIonRouter } from "@ionic/react";

const Introduction: React.FC = () => {
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
            அறிமுகம்
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="content">
          <IonImg
            style={{ padding: "10px" }}
            src="https://i.pinimg.com/474x/03/cd/a1/03cda18158d46ebff63d95e9ce372a4c.jpg"
            alt="DR.BAch"
          />
        </div>{" "}
        <div className="topics">
          <h1>Dr. Edward Bach</h1>
          <p>
            மலர் மருத்துவம் (Bach flower remedies) என்பது ஹோமியோபதி
            மருத்துவத்துக்கு சகோதர மருத்துவமாகத் திகழ்கிறது. மலர் மருந்துகளைக்
            கண்டுபிடித்தவர் ஹோமியோபதியிலும், ஆங்கில மருத்துவத்திலும் புகழ்பெற்ற
            மருத்துவர் எட்வர்டு பாட்ச் என்பவர். எந்த நோய்க்கும் மனமே
            மூலகாரணமாகும். நோய்க்கான ஆரம்ப இடம் மனம் என்பதை அறிந்து கொண்டார்.
            மனதை சரிப்படுத்தினால், உடல் குணமடையும் என்பதைத் தெரிந்து கொண்டதால்
            1930-ல் காடுகளுக்குச் சென்று அங்குள்ள மலர்களையும், இலைகளையும் உண்டு
            சோதித்துப் பார்த்தார்.
          </p>
          <p>
            38 வகையான மலர் மருந்துகள் மனதை ஒழுங்குபடுத்த உதவியதாகக்
            கண்டுபிடித்து அவற்றை வரிசைப்படுத்தினார். மேலும், இந்த மலர்
            மருந்துகளை தனியாகவும் ஹோமியோபதி மருந்துகளுடன் சேர்த்தும் கொடுத்துப்
            பரிசோதித்து, முறைப்படுத்தினார். இன்றைக்கு உலகம் முழுவதும் இந்த மலர்
            மருத்துவம் பரவி ஏராளமானோர் பயன்பெற்று வருகின்றனர்.
          </p>{" "}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Introduction;
