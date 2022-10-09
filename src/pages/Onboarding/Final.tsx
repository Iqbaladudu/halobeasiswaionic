import { IonButton, IonContent, IonImg, IonPage } from "@ionic/react";

const Final = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="flex justify-center items-center w-[100%] h-[100%] bg-[#E9F6FC]">
          <IonImg
            src={require("../../assets/img/final.png")}
            className="absolute bottom-0"
          />
          <IonButton color="danger">Mulai</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Final;
