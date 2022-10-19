import {
  IonButton,
  IonContent,
  IonIcon,
  IonPage,
  IonSlide,
  IonSlides,
} from "@ionic/react";
import { enter, book, playCircle } from "ionicons/icons";
import { StudyAbroadHeader } from "../StudyAbroad";
import "./StudyAbroadMenuDetail.css";

const StudyAbroadMenuDetail = () => {
  return (
    <IonPage>
      <StudyAbroadHeader backUrl="/studyAbroad" />
      <IonContent>
        <div className="flex w-[100%] ml-[10px] mt-[30px]">
          <IonSlides
            options={{
              initialSlide: 1,
              centeredSlides: true,
              speed: 400,
              slidesPerView: 2,
              spaceBetween: 10,
              direction: "horizontal",
            }}
          >
            <IonSlide>
              <IonButton
                fill="clear"
                className="w-[187px] h-[95px] bg-variants rounded-[10px] font-bold text-xl text-secondary"
              >
                <div>
                  <IonIcon icon={book} size="large"></IonIcon>
                  <p>Booklet</p>
                </div>
              </IonButton>
            </IonSlide>
            <IonSlide>
              <IonButton
                fill="clear"
                className="w-[187px] h-[95px] bg-variants rounded-[10px] font-bold text-xl text-secondary"
              >
                <div>
                  <IonIcon icon={enter} size="large"></IonIcon>
                  <p>Daftar</p>
                </div>
              </IonButton>
            </IonSlide>
            <IonSlide>
              <IonButton
                fill="clear"
                className="w-[187px] h-[95px] bg-variants rounded-[10px] font-bold text-xl text-secondary"
              >
                <div>
                  <IonIcon icon={playCircle} size="large"></IonIcon>
                  <p>Panduan</p>
                </div>
              </IonButton>
            </IonSlide>
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default StudyAbroadMenuDetail;
