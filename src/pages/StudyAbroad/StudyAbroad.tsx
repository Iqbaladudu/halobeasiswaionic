import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { RootState } from "../../store/store";
import CountryListCard from "./CountryListCard";
import "./StudyAbroad.css";

interface Props {
  backUrl: string;
}

export const StudyAbroadHeader: React.FC<Props> = ({ backUrl }) => {
  const history = useHistory();

  return (
    <IonHeader>
      <IonToolbar>
        <IonButton
          onClick={() => history.push(backUrl)}
          color="danger"
          className="font-primary font-bold ml-5"
        >
          Kembali
        </IonButton>
      </IonToolbar>
    </IonHeader>
  );
};

const StudyAbroad = () => {
  interface CountryData {
    countryName: string;
    url: string;
    position: number;
  }

  const history = useHistory();

  const { isClicked } = useSelector((state: RootState) => state.ClickedSlice);

  const countryData: CountryData[] = [
    { countryName: "Turkiye", url: "", position: 1 },
    { countryName: "Tiongkok", url: "", position: 2 },
    { countryName: "Jordan", url: "", position: 3 },
    { countryName: "India", url: "", position: 4 },
    { countryName: "Taiwan", url: "", position: 5 },
    { countryName: "Yaman", url: "", position: 6 },
  ];

  return (
    <IonPage>
      <StudyAbroadHeader backUrl="/menu" />
      <IonContent fullscreen className="font-primary text-2xl">
        <div className="flex flex-col justify-between h-[90%]">
          <div className="w-[100%] flex flex-col justify-center items-center gap-5 mt-[70px]">
            <p className="text-secondary">Pilih Negara Tujuan Kamu:</p>
            <div className="flex flex-wrap justify-between w-[70%] gap-5 rounded-sm">
              {countryData.map(({ countryName, url, position }) => (
                <CountryListCard
                  countryName={countryName}
                  url={url}
                  position={position}
                  key={position}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center w-[100%]">
            <IonButton
              disabled={!isClicked ? true : false}
              color="light"
              className="font-bold"
              onClick={() => history.push("/studyAbroadMenuDetail")}
            >
              Selanjutnya
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default StudyAbroad;
