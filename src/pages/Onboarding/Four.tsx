import { IonImg, IonInput, IonSelect, IonSelectOption } from "@ionic/react";
import useSWR from "swr";
import axios, { AxiosResponse } from "axios";
import "./Three.css";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";

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
  // const dispatch: AppDispatch = useDispatch();

  const { data } = useSWR(
    "https://restcountries.com/v2/all?fields=name",
    fetcher
  );

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
          className="bg-white h-[50px] w-[250px] rounded-md px-2 flex justify-center text-center font-bold text-gray-500"
        ></IonInput>
      </div>
      <div className="">
        <IonSelect
          placeholder="Gender"
          className="bg-white h-[50px] w-[250px] rounded-md px-2 flex justify-center text-center  font-bold text-gray-500"
          name="gender"
          mode="ios"
        >
          <IonSelectOption value="male">Laki-laki</IonSelectOption>
          <IonSelectOption value="female">Perempuan</IonSelectOption>
        </IonSelect>
      </div>
      <div>
        <IonInput
          inputMode="numeric"
          type="number"
          maxlength={2}
          name="age"
          required
          placeholder="Umur"
          className="bg-white h-[50px] w-[250px] rounded-md px-2 flex justify-center text-center font-bold text-gray-500"
        ></IonInput>
      </div>
      <div>
        <IonSelect
          mode="ios"
          placeholder="Negara Tujuan Kuliah"
          className="bg-white h-[50px] w-[250px] rounded-md px-2 flex justify-center text-center  font-bold text-gray-500"
          name="gender"
        >
          {data?.map(({ name }, id) => (
            <IonSelectOption key={id} value={name}>
              {name}
            </IonSelectOption>
          ))}
        </IonSelect>
      </div>
      <div>
        <IonInput
          type="tel"
          inputMode="tel"
          maxlength={13}
          required
          className="bg-white h-[50px] w-[250px] rounded-md px-2 flex justify-center text-center font-bold text-gray-500"
          placeholder="Nomor Telepon: 628xxxx"
        ></IonInput>
      </div>
    </div>
  );
};
