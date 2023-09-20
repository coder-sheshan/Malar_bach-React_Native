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

const Remedy: React.FC = () => {
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
            உபயோக முறை
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="content">
          <IonImg
            style={{ padding: "10px" }}
            src="https://i.pinimg.com/474x/dd/f3/e1/ddf3e1f69f0429b7908b3bf159090255.jpg"
            alt="DR.BAch"
          />
        </div>{" "}
        <div className="topics-remedy">
          <h1>வைத்தியம் எடுக்கும் முறை</h1>
          <p>
            பிறந்த குழந்தை முதல் அனைத்து வயதினரும் அவரவரிடம் அமைந்துள்ள எதிர்மறை
            இயல்புகளுக்கேற்ப மலர்மருந்துகளை எடுதடதுக் கொள்ளலாம். இதில்
            எந்தவிதமான தடைகளும் கட்டுப்பாடுகளும் யாருக்கும் கிடையாது.
          </p>
          <p>
            குறுகிய கால மனநிலை மற்றும் பிரச்சனைகளுக்கு தேர்ந்தெடுக்கப்பட்ட
            ஒவ்வொரு மருந்தின் இரண்டு சொட்டுகளை ஒரு கிளாஸ் தண்ணீரில் போடவும்.
            நிவாரணம் கிடைக்கும் வரை தேவைக்கேற்ப அடிக்கடி பருகுங்கள். முன் கலந்த
            அவசர சூத்திரத்தைப் பயன்படுத்தினால், கண்ணாடியில் இரண்டு
            சொட்டுகளுக்குப் பதிலாக நான்கு சொட்டுகளைச் சேர்க்கவும்.
          </p>
          <p>
            மேலும் நாள்பட்ட பிரச்சனைகளுக்கு, ஒரு துளிசொட்டி பாட்டிலில் தனிப்பட்ட
            மருந்து கலவையை உருவாக்க பரிந்துரைக்கிறோம். இந்த வழக்கில், 4
            சொட்டுகள் ஒரு துளிசொட்டியுடன் ஒரு நாளைக்கு 6 முறை நாக்கின் கீழ்
            வைக்கப்படுகின்றன.
          </p>{" "}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Remedy;
