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
import { useParams } from "react-router-dom";
import { chevronBack } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import "./Introduction.css";
import ImageContainer from "../components/ImageContainer";
import { useIonRouter } from "@ionic/react";
import jsonData from "../context/Data.json";

const FlowerPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const FlowerId = parseInt(id, 10);

  const FilterFlower = jsonData.filter((e) => e.id == FlowerId);

  // console.log("FilterFlower", FilterFlower);
  // console.log("FilterId", id);

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
            மலர் விவரங்கள்
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {FilterFlower.map((item, index) => (
          <>
            <div key={item.id} className="content">
              <IonImg
                style={{ padding: "10px" }}
                src={item.image}
                alt="DR.BAch"
              />
            </div>{" "}
            <div style={{padding:'10px', margin:'10px'}}>
              <h1 style={{color:'blueviolet'}}>{item.flowername}</h1><br></br>
              <span style={{color:'deeppink'}}>"{item.indication}"</span>
              <p style={{ textAlign: "center", fontSize:'15px' }}>{item.maincontent}</p>
            </div>
          </>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default FlowerPage;
