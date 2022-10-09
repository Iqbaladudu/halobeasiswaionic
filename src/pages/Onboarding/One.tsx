import { IonImg } from "@ionic/react";

export const ImgOne = () => {
  return (
    <IonImg src={require("../../assets/img/one.png")} className="relative" />
  );
};

export const HeaderTextOne = () => {
  return (
    <p className="font-bold text-[24px] text-white">Hai, aku Halo Beasiswa</p>
  );
};

export const ContentTextOne = () => {
  return (
    <p className="text-center font-semibold text-[21px] text-white w-[90%]">
      Aku ingin menjadi sahabat yang akan menemanimu kuliah ke luar negeri
    </p>
  );
};
