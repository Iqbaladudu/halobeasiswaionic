import { IonImg } from "@ionic/react";

export const ImgTwo = () => {
  return (
    <IonImg src={require("../../assets/img/two.png")} className="relative" />
  );
};

export const HeaderTextTwo = () => {
  return <p className="font-bold text-[24px] text-white">Kenapa harus aku?</p>;
};

export const ContentTextTwo = () => {
  return (
    <p className="text-center font-semibold text-[19px] text-white w-[90%]">
      Karena, aku juga sudah menemani banyak orang untuk mewujudkan mimpi mereka
      kuliah ke luar negeri
    </p>
  );
};
