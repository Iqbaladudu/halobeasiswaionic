import { IonImg, IonInput, IonSelect, IonSelectOption } from "@ionic/react";
import useSWR from "swr";
import axios, { AxiosResponse } from "axios";
import "./Three.css";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import {
  countryWantToStudy,
  gender,
  phoneNumber,
  umur,
} from "../../store/RegisterForm";
import { useState } from "react";

interface Country {
  name: string;
  callingCodes: string[];
  independent: boolean;
}

const fetcher = (url: string) =>
  axios.get(url).then((res: AxiosResponse<Country[]>) => res.data);

export const ImgFour = () => {
  return (
    <IonImg src={require("../../assets/img/three.png")} className="relative" />
  );
};

export const HeaderTextFour = () => {
  return (
    <p className="font-bold text-[19px] text-white">
      Yuk Lengkapi dulu datamu!
    </p>
  );
};

export const ContentTextFour = () => {
  const dispatch: AppDispatch = useDispatch();
  const [countryCode, setCountryCode] = useState("");

  const { data } = useSWR(
    "https://restcountries.com/v2/all?fields=name,callingCodes",
    fetcher
  );

  return (
    <div className="flex flex-col gap-[20px] justify-center items-center">
      <div className="">
        <IonSelect
          placeholder="Gender"
          className="bg-white h-[50px] w-[250px] rounded-md px-2 flex justify-center text-center  font-bold text-gray-500"
          name="gender"
          mode="ios"
          onIonChange={(e) => dispatch(gender(e.target.value as string))}
        >
          <IonSelectOption value="male">Laki-laki</IonSelectOption>
          <IonSelectOption value="female">Perempuan</IonSelectOption>
        </IonSelect>
      </div>
      <div>
        <IonInput
          inputMode="decimal"
          type="number"
          maxlength={2}
          name="age"
          required
          placeholder="Umur"
          className="bg-white h-[50px] w-[250px] rounded-md flex justify-center text-center font-bold text-gray-500"
          onIonChange={(e) => dispatch(umur(e.target.value as number))}
        ></IonInput>
      </div>
      <div>
        <IonSelect
          mode="ios"
          placeholder="Negara Tujuan Kuliah"
          className="bg-white h-[50px] w-[250px] rounded-md px-2 flex justify-center text-center  font-bold text-gray-500"
          name="countryWantToStudy"
          onIonChange={(e) =>
            dispatch(countryWantToStudy(e.target.value as string))
          }
        >
          {data?.map(({ name }, id) => (
            <IonSelectOption key={id} value={name}>
              {name}
            </IonSelectOption>
          ))}
        </IonSelect>
      </div>
      <div className="flex flex-row gap-1">
        <IonSelect
          mode="ios"
          className="bg-white h-[50px] w-[60px] rounded-md px-2 flex justify-center text-center  font-bold text-gray-500"
          name="countryWantToStudy"
          onIonChange={(e) => setCountryCode(e.target.value)}
          placeholder="+"
        >
          {data?.map(({ callingCodes }, id) => (
            <IonSelectOption key={id} value={callingCodes[0]}>
              {"+" + callingCodes[0]}
            </IonSelectOption>
          ))}
        </IonSelect>
        <IonInput
          type="number"
          inputMode="tel"
          maxlength={11}
          className="bg-white h-[50px] w-[190px] rounded-md px-2 flex justify-center text-center font-bold text-gray-500"
          name="countryWantToStudy"
          placeholder="No Hp/WhatsApp"
          onIonChange={(e) =>
            dispatch(phoneNumber((countryCode + e.target.value) as string))
          }
        ></IonInput>
      </div>
    </div>
  );
};
