import { IonBadge, IonButton, IonContent, IonImg, IonPage } from "@ionic/react";
import "./Home.css";

const Home = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonImg
          src={require("../../../assets/img/homeBg.png")}
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
          <div className="w-[90%] h-[300px] bg-variants rounded-[20px] overflow-hidden flex shadow-lg main-bg bg-cover items-center justify-around bg-center bg-origin-border">
            <IonBadge
              slot="end"
              mode="ios"
              color="danger"
              className="z-50 absolute right-[20%]"
            >
              Dijamin Lulus
            </IonBadge>
            <IonImg
              src={require("../../../assets/img/young.png")}
              className="absolute left-[10%]"
            />
            <div className="absolute top-[10%] w-[40%] text-2xl text-secondary text-center font-primary ml-[20%]">
              <p>Daftar Kuliah ke Luar Negeri</p>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex justify-center bottom-[6%] absolute">
          <div className="flex justify-between w-[90%]">
            <IonButton
              color="none"
              className="w-[40%] h-[125px] bg-variants rounded-[10px] flex justify-center items-center shadow-md"
            >
              <div className="flex flex-col items-center gap-1">
                <IonImg
                  src={require("../../../assets/img/chatIcon.png")}
                  className="w-[40px] h-[40px]"
                />
                <p className="font-primary text-secondary text-xl">Chat</p>
              </div>
            </IonButton>
            <IonButton
              color="none"
              className="w-[40%] h-[125px] bg-variants rounded-[10px] flex justify-center items-center shadow-md"
            >
              <div className="flex flex-col items-center gap-1">
                <IonImg
                  src={require("../../../assets/img/aboutUsIcon.png")}
                  className="w-[47px] h-[40px]"
                />
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
