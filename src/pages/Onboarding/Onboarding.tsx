import {
  IonButton,
  IonContent,
  IonIcon,
  IonPage,
  IonProgressBar,
  IonToast,
} from "@ionic/react";
import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Dot from "../../components/Dot/Dot";
import { useAppSelector } from "../../hooks/hooks";
import { decrement, increment } from "../../store/positionSlice";
import { AppDispatch } from "../../store/store";
import { clsx } from "clsx";
import { book, caretBackCircle, caretForwardCircle } from "ionicons/icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toggleClick } from "../../store/RegisterForm";

import "./Onboarding.css";
import writeUserData from "../../Service/writeUserData";

interface Props {
  img?: ReactNode;
  headerText?: ReactNode | ReactNode[];
  contentText?: ReactNode | ReactNode[];
  long?: boolean;
  submit?: boolean;
  register?: boolean;
}

const Onboarding: React.FC<Props> = ({
  img,
  headerText,
  contentText,
  long,
  submit,
  register,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);
  const [isButtonDisabledThree, setIsButtonDisabledThree] =
    useState<boolean>(false);
  const [isButtonDisabledFour, setIsButtonDisabledFour] =
    useState<boolean>(false);

  const { position } = useAppSelector(({ positions }) => {
    return positions;
  });

  const {
    username,
    email,
    password,
    fullName,
    phoneNumber,
    gender,
    umur,
    countryWantToStudy,
  } = useAppSelector(({ register }) => {
    return register;
  });

  // Validasi input null step 3
  const stepThreeValidation = () => {
    if (position === 3 && !username && !email && !password) {
      setIsButtonDisabledThree(true);
    } else {
      setIsButtonDisabledThree(false);
    }
  };

  const stepFourValidation = () => {
    if (
      position === 4 &&
      !fullName &&
      !phoneNumber &&
      !gender &&
      !umur &&
      !countryWantToStudy
    ) {
      setIsButtonDisabledFour(true);
    } else {
      setIsButtonDisabledFour(false);
    }
  };

  useEffect(() => stepThreeValidation());
  useEffect(() => stepFourValidation());

  const NextPos = () => {
    dispatch(increment());
  };

  const PrevPos = () => {
    dispatch(decrement());
  };

  const doRegister = async () => {
    await setLoading(true);
    await dispatch(toggleClick(true));
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        writeUserData({
          userId: userCredential.user.uid,
          username: username,
          email: email,
        });
        setShowToast(true);
        NextPos();
      })
      .catch((error) => {
        setShowToast(true);
        setError(true);
        setErrorMessage(error.message);
        console.log(error.message);
        NextPos();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <IonPage>
      <IonContent>
        {loading && <IonProgressBar type="indeterminate" />}
        {error ? (
          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            position="top"
            duration={1500}
            header="ERROR"
            color="danger"
            message={errorMessage}
          />
        ) : (
          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            position="middle"
            duration={1500}
            header="BERHASIL"
            color="light"
            message="Kamu berhasil mendaftar"
          />
        )}
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
                <IonIcon icon={caretBackCircle} size="large" class="icon" />
              </IonButton>
            )}
            <IonButton
              className="h-auto"
              fill="clear"
              disabled={
                isButtonDisabledThree === true
                  ? true
                  : isButtonDisabledFour === true
                  ? true
                  : false
              }
              type={submit ? "submit" : "button"}
              onClick={() => (register ? doRegister() : NextPos())}
            >
              <IonIcon icon={caretForwardCircle} size="large" class="icon" />
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Onboarding;
