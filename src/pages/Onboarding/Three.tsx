import { IonImg, IonInput } from "@ionic/react";
import { useDispatch } from "react-redux";
import { email, fullName, password, username } from "../../store/RegisterForm";
import { AppDispatch } from "../../store/store";
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
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="flex flex-col gap-[20px] justify-center items-center">
      <div>
        <IonInput
          autoCapitalize="words"
          autocomplete="name"
          inputMode="text"
          maxlength={30}
          name="fullname"
          required
          placeholder="Nama Lengkap"
          className="bg-white h-[50px] rounded-md px-2 flex justify-center font-bold text-gray-500"
          onIonChange={(e) => dispatch(fullName(e.target.value as string))}
        ></IonInput>
      </div>
      <div className="">
        <IonInput
          inputMode="text"
          type="text"
          maxlength={20}
          name="username"
          required
          placeholder="Username"
          className="bg-white h-[50px] rounded-md px-2 flex justify-center font-bold text-gray-500"
          onIonChange={(e) => dispatch(username(e.target.value as string))}
        ></IonInput>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <IonInput
          inputMode="email"
          type="email"
          maxlength={100}
          name="email"
          required
          placeholder="Email"
          className="bg-white h-[50px] rounded-md px-2 flex justify-center font-bold text-gray-500"
          onIonChange={(e) => dispatch(email(e.target.value as string))}
        ></IonInput>
      </div>
      <div className="flex justify-center items-center">
        <IonInput
          inputMode="text"
          type="password"
          maxlength={100}
          name="password"
          required
          placeholder="Kata Sandi"
          className="bg-white h-[50px] rounded-md px-2 flex justify-center font-bold text-gray-500"
          onIonChange={(e) => dispatch(password(e.target.value as string))}
        ></IonInput>
      </div>
    </div>
  );
};
