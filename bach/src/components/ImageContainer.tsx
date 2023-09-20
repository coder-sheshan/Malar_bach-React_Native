import './ExploreContainer.css';
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

interface ContainerProps {
  name: string;
}

const ImageContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="content">
    <IonImg
      style={{ padding: "10px" }}
      src="https://i.pinimg.com/474x/12/6c/c9/126cc9ea43f6008797bde6d6d632bb6b.jpg"
      alt="Home Img"
    />
  </div>
  );
};

export default ImageContainer;