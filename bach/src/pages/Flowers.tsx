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
  IonItem,
  IonLabel,
  IonAvatar,
  IonRouterLink,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { chevronBack, caretForwardOutline } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import ImageContainer from "../components/ImageContainer";
import { useIonRouter } from "@ionic/react";
import jsonData from "../context/Data.json";

const Flowers: React.FC = () => {

  console.log(jsonData.map((e) => e.flowername));

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
    <IonPage className="page"
    style={{
      background:"linear-gradient(to right, rgb(249, 168, 212), rgb(216, 180, 254), rgb(129, 140, 248))",
      padding: "10px",
      height: "100%",
    }}
    >
      <IonHeader>
      <IonToolbar>
          <IonTitle className="hello">
            <IonIcon
              style={{ float: "left" }}
              onClick={handleCustomBack}
              aria-hidden="true"
              icon={chevronBack}
            />
            மலர்கள்
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <div className="flower-list">
          {jsonData.map((item) => (
            <IonRouterLink routerLink={`/flowerpage${item.id}`}>
              <IonItem button detail={true}>
                <IonAvatar style={{height:'60px', width:'60px'}} slot="start">
                  <img alt="Silhouette of a person's head" src={item.image} />
                </IonAvatar>
                <IonLabel>
                  <h2 style={{fontSize:'20px', color:'blueviolet'}}>{item.flowername}</h2>
                  <p>{item.subcontent}</p>
                </IonLabel>
              </IonItem>
            </IonRouterLink>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Flowers;
