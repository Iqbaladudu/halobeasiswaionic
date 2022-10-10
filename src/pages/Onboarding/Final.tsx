import { IonButton, IonContent, IonImg, IonPage } from "@ionic/react";
import { useHistory } from "react-router";

const Final = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="flex justify-center items-center w-[100%] h-[100%] bg-[#E9F6FC]">
          <IonImg
            src={require("../../assets/img/final.png")}
            className="absolute bottom-0"
          />
          <IonButton color="danger" onClick={() => history.push("/menu")}>
            Mulai
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Final;
