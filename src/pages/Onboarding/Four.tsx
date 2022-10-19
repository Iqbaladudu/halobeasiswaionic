import {
  IonImg,
  IonInput,
  IonItem,
  IonItemDivider,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import useSWR from "swr";
import axios, { AxiosResponse } from "axios";
import "./Three.css";

interface Country {
  name: string;
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
  const { data } = useSWR(
    "https://restcountries.com/v2/all?fields=name",
    fetcher
  );

  return (
    <IonList lines="none" mode="ios">
      <IonItem>
        <IonInput
          autoCapitalize="words"
          autocomplete="name"
          inputMode="text"
          maxlength={30}
          mode="ios"
          name="fullname"
          required
          placeholder="Nama Lengkap"
          className="text-gray-500 font-bold"
        ></IonInput>
      </IonItem>
      <IonItemDivider></IonItemDivider>
      <IonItem>
        <IonSelect
          placeholder="Gender"
          className="text-gray-500 font-bold"
          mode="ios"
          name="gender"
        >
          <IonSelectOption value="male">Laki-laki</IonSelectOption>
          <IonSelectOption value="female">Perempuan</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItemDivider></IonItemDivider>
      <IonItem>
        <IonInput
          inputMode="numeric"
          type="number"
          maxlength={2}
          mode="ios"
          name="age"
          required
          placeholder="Umur"
          className="text-gray-500 font-bold"
        ></IonInput>
      </IonItem>
      <IonItemDivider></IonItemDivider>
      <IonItem>
        <IonSelect
          placeholder="Negara Tujuan Kuliah"
          className="text-gray-500 font-bold"
          mode="ios"
          name="gender"
        >
          {data?.map(({ name }, id) => (
            <IonSelectOption key={id} value={name}>
              {name}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
      <IonItemDivider></IonItemDivider>
    </IonList>
  );
};
