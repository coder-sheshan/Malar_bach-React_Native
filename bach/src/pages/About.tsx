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
  IonRouterLink,
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import "./Introduction.css";
import ImageContainer from "../components/ImageContainer";
import { useIonRouter } from "@ionic/react";

const About: React.FC = () => {
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
            செயலி பற்றி
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="content">
          <IonImg
            style={{ padding: "10px" }}
            src="https://i.pinimg.com/474x/c7/39/c1/c739c1afb6a1284bfeb699d889640b20.jpg"
            alt="DR.BAch"
          />
        </div>{" "}
        <div className="topics">
          <h1>இந்த செயலி பற்றி</h1>

          <p>
            இந்த பயன்பாட்டின் மூலம் உங்களுக்கு தேவையான தீர்வுகளை இரண்டு வெவ்வேறு
            வழிகளில் காணலாம்:
          </p>

          <p>
            <span style={{color:'red', fontSize:'20px'}}>*</span>
            இந்த குறிப்பிட்ட தருணத்தில் நீங்கள் அனுபவிக்கும் உணர்வுகள் மற்றும்
            சூழ்நிலைகளை பகுப்பாய்வு செய்தல்.
          </p>
          <p>
          <span style={{color:'red', fontSize:'20px'}}>*</span>
            நீங்கள் நினைக்கும் பூவைத் தேர்ந்தெடுப்பதன் மூலம் உங்களை நன்றாக
            ஒத்திசைக்க முடியும்
          </p>

          <p>
            "எங்கள் ஃப்ளவர் மெடிசின் ஆப் மூலம் இயற்கையின் குணப்படுத்தும்
            ஆற்றலைக் கண்டறியவும். மலர் மருந்துகளின் உலகத்தையும், உணர்ச்சி
            மற்றும் மன நலனில் அவற்றின் ஆழமான தாக்கத்தையும் ஆராயுங்கள். நீங்கள்
            மன அழுத்தம், பதட்டம் அல்லது ஆழமான சமநிலை மற்றும் நல்லிணக்க
            உணர்விலிருந்து விடுபட விரும்புகிறீர்களா , எங்கள் பயன்பாடு மலர்
            சாரங்கள் மற்றும் அவற்றின் சிகிச்சைப் பயன்கள் பற்றிய விரிவான
            வழிகாட்டியை வழங்குகிறது. தனிப்பட்ட மலர் சுயவிவரங்கள்,
            பரிந்துரைக்கப்பட்ட பயன்பாடுகள் மற்றும் உணர்ச்சிகரமான சிகிச்சை
            மற்றும் உள் அமைதியை மேம்படுத்துவதற்கான தனிப்பயனாக்கப்பட்ட தீர்வுகள்
            பற்றி அறிந்து கொள்ளுங்கள். இயற்கையின் பூக்களின் ஞானத்துடன் உங்களை
            மேம்படுத்தி, முழுமையான பயணத்தைத் தொடங்குங்கள். எங்கள் ஃப்ளவர்
            மெடிசின் ஆப் மூலம் ஆரோக்கியம் உண்டாகட்டும்."
          </p>

          <p>
            App Created By:&nbsp;<span style={{color:"deeppink", fontSize:'20px'}}>V.SheshanRaj</span>
          </p>
          <p>
            <span>
              Junior Full-stack Web Developer And Mobile App Developer
            </span>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
