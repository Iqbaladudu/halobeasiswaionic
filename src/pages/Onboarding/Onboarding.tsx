import { IonButton, IonContent, IonImg, IonPage } from "@ionic/react";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import Dot from "../../components/Dot/Dot";
import { useAppSelector } from "../../hooks/hooks";
import { decrement, increment } from "../../store/positionSlice";
import { AppDispatch } from "../../store/store";
import { clsx } from "clsx";

interface Props {
  img?: ReactNode;
  headerText?: ReactNode | ReactNode[];
  contentText?: ReactNode | ReactNode[];
  long?: boolean;
  submit?: boolean;
}

const Onboarding: React.FC<Props> = ({
  img,
  headerText,
  contentText,
  long,
  submit,
}) => {
  const dispatch: AppDispatch = useDispatch();

  const { position } = useAppSelector(({ positions }) => {
    return positions;
  });

  const NextPos = () => {
    dispatch(increment());
  };

  const PrevPos = () => {
    dispatch(decrement());
  };

  return (
    <IonPage>
      <IonContent>
        {img}
        <div
          className={clsx(
            "bg-primary w-[100%] absolute bottom-0 rounded-t-[50px] flex justify-center items-center gap-5 flex-col",
            long ? "h-[70%]" : "h-[45%]"
          )}
        >
          <div className="flex gap-2 absolute top-6">
            <Dot long={position === 1 ? true : false} />
            <Dot long={position === 2 ? true : false} />
            <Dot long={position === 3 ? true : false} />
            <Dot long={position === 4 ? true : false} />
          </div>
          {headerText}
          {contentText}
          <div
            className={clsx(
              "flex w-full absolute bottom-5",
              position > 1 ? "justify-between" : "justify-end"
            )}
          >
            {position > 1 && (
              <IonButton
                className="h-auto"
                fill="clear"
                onClick={() => PrevPos()}
              >
                <IonImg src={require("../../assets/img/left.png")} />
              </IonButton>
            )}
            <IonButton
              className="h-auto"
              fill="clear"
              type={submit ? "submit" : "button"}
              onClick={() => NextPos()}
            >
              <IonImg src={require("../../assets/img/right.png")} />
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Onboarding;
