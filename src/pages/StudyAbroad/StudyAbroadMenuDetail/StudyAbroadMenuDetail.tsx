import { IonContent, IonPage, IonSlide, IonSlides } from "@ionic/react";
import { StudyAbroadHeader } from "../StudyAbroad";
import "./StudyAbroadMenuDetail.css";

const slideOpts = {
  initialSlide: 1,
  speed: 400,
  slidesPerView: 2,
  spaceBetween: 40,
};

const StudyAbroadMenuDetail = () => {
  return (
    <IonPage>
      <StudyAbroadHeader backUrl="/studyAbroad" />
      <IonContent>
        <div className="flex w-[90%] ml-[10%] mt-[50px]">
          <IonSlides pager={false} options={slideOpts}>
            <IonSlide>
              <div className="w-[187px] h-[95px] bg-variants rounded-[10px]"></div>
            </IonSlide>
            <IonSlide>
              <div className="w-[187px] h-[95px] bg-variants rounded-[10px]"></div>
            </IonSlide>
            <IonSlide>
              <div className="w-[187px] h-[95px] bg-variants rounded-[10px]"></div>
            </IonSlide>
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default StudyAbroadMenuDetail;
