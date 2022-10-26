import { IonButton, IonHeader, IonToolbar } from "@ionic/react";
import { useHistory } from "react-router";

const LiveChatHeader = () => {
  const history = useHistory();

  return (
    <IonHeader>
      <IonToolbar className="flex flex-row">
        <div className="h-full w-full flex gap-[5%] items-center">
          <IonButton
            onClick={() => history.push("/menu")}
            color="light"
            className="font-primary font-bold ml-5 text-secondary"
          >
            Kembali
          </IonButton>
          <p className="font-extrabold text-xl">Halo Beasiswa</p>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default LiveChatHeader;
