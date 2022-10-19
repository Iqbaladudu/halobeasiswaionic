import {
  IonImg,
  IonInput,
  IonItem,
  IonItemDivider,
  IonList,
} from "@ionic/react";
import "./Three.css";

export const ImgThree = () => {
  return (
    <IonImg src={require("../../assets/img/three.png")} className="relative" />
  );
};

export const HeaderTextThree = () => {
  return (
    <p className="font-bold text-[19px] text-white">
      Hai, Silahkan Mendaftar Dulu!
    </p>
  );
};

export const ContentTextThree = () => {
  return (
    <IonList lines="none" mode="ios">
      <IonItem>
        <IonInput
          inputMode="text"
          type="text"
          maxlength={20}
          mode="ios"
          name="username"
          required
          placeholder="Username"
          className="text-gray-500 font-bold"
        ></IonInput>
      </IonItem>
      <IonItemDivider></IonItemDivider>
      <IonItem>
        <IonInput
          inputMode="email"
          type="email"
          maxlength={100}
          mode="ios"
          name="email"
          required
          placeholder="Email"
          className="text-gray-500 font-bold"
        ></IonInput>
      </IonItem>
      <IonItemDivider></IonItemDivider>
      <IonItem>
        <IonInput
          inputMode="text"
          type="password"
          maxlength={100}
          mode="ios"
          name="password"
          required
          placeholder="Kata Sandi"
          className="text-gray-500 font-bold"
        ></IonInput>
      </IonItem>
      <IonItemDivider></IonItemDivider>
    </IonList>
  );
};
