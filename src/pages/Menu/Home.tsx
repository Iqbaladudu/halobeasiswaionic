import {
  IonBadge,
  IonButton,
  IonContent,
  IonIcon,
  IonImg,
  IonPage,
} from "@ionic/react";
import { useHistory } from "react-router";
import { chatbubbleEllipses, informationCircle } from "ionicons/icons";
import "./Home.css";

const Home = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonImg
          src={require("../../assets/img/homeBg.png")}
          className="relative"
        />
        <div className="bg-white h-[70%] border rounded-[50px] w-[100%] absolute bottom-0"></div>
        <div className="absolute w-[100%] flex justify-center top-7">
          <div className="flex justify-around w-[90%] items-center h-[93px] rounded-[20px] backdrop-blur-xl bg-white/10 ">
            <div className="font-primary">
              <p className="text-3xl text-white font-bold">Halo, Iqbal</p>
              <p className="text-md text-white font-bold">
                Tetap semangat berjuang yah
              </p>
            </div>
            <div className="h-[50px] w-[50px] rounded-full overflow-hidden">
              <IonImg src="https://ui-avatars.com/api/?name=Muhammad+Iqbal" />
            </div>
          </div>
        </div>
        <div className="absolute w-[100%] flex top-[25%] justify-center">
          <IonButton
            onClick={() => history.push("/studyAbroad")}
            color="none"
            className="w-[90%] h-[300px] bg-variants rounded-[20px] overflow-hidden flex shadow-lg main-bg bg-cover items-center justify-around bg-center bg-origin-border"
          >
            <IonBadge
              slot="end"
              mode="ios"
              color="danger"
              className="z-50 absolute right-[20%]"
            >
              Dijamin Lulus
            </IonBadge>
            <IonImg
              src={require("../../assets/img/young.png")}
              className="absolute left-[10%]"
            />
            <div className="absolute top-[10%] text-md text-secondary text-center font-primary">
              <p>Daftar Kuliah ke Luar Negeri</p>
            </div>
          </IonButton>
        </div>
        <div className="w-[100%] flex justify-center bottom-[6%] absolute">
          <div className="flex justify-between w-[90%]">
            <IonButton
              color="none"
              className="w-[40%] h-[125px] bg-variants rounded-[10px] flex justify-center items-center shadow-md"
              onClick={() => history.push("/liveChat")}
            >
              <div className="flex flex-col items-center gap-1">
                <IonIcon icon={chatbubbleEllipses} size="large" />
                <p className="font-primary text-secondary text-xl">Chat</p>
              </div>
            </IonButton>
            <IonButton
              color="none"
              className="w-[40%] h-[125px] bg-variants rounded-[10px] flex justify-center items-center shadow-md"
            >
              <div className="flex flex-col items-center gap-1">
                <IonIcon icon={informationCircle} size="large" />
                <p className="font-primary text-secondary text-xl">About Us</p>
              </div>
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
