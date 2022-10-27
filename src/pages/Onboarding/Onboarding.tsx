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
import { caretBackCircle, caretForwardCircle } from "ionicons/icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { setId, toggleClick } from "../../store/RegisterForm";

import "./Onboarding.css";
import writeUserData from "../../Service/writeUserData";

interface Props {
  img?: ReactNode;
  headerText?: ReactNode | ReactNode[];
  contentText?: ReactNode | ReactNode[];
  long?: boolean;
  submit?: boolean;
  register?: boolean;
  writeData?: boolean;
}

const Onboarding: React.FC<Props> = ({
  img,
  headerText,
  contentText,
  long,
  submit,
  register,
  writeData,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  const { position } = useAppSelector(({ positions }) => {
    return positions;
  });

  const {
    userId,
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

  useEffect(() => {
    if (position === 3) {
      setIsButtonDisabled(true);
      if (username && password && fullName) {
        setIsButtonDisabled(false);
      }
    }
  }, [position, username, password, fullName]);

  useEffect(() => {
    if (position === 4) {
      setIsButtonDisabled(true);
      if (phoneNumber && gender && umur && countryWantToStudy) {
        setIsButtonDisabled(false);
        return;
      }
    }
  }, [position, phoneNumber, gender, umur, countryWantToStudy]);

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
        dispatch(setId(userCredential.user.uid));
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

  const addData = async () => {
    await setLoading(true);
    await writeUserData({
      userId,
      username,
      fullName,
      email,
      phoneNumber,
      gender,
      umur,
      countryWantToStudy,
    });
    await setLoading(false);
    NextPos();
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
            position="top"
            duration={1500}
            header="BERHASIL"
            color="success"
            message="Kamu berhasil mendaftar"
          />
        )}
        {img}
        <div
          className={clsx(
            "bg-primary w-[100%] absolute bottom-0 rounded-t-[50px] flex justify-center items-center gap-5 flex-col",
            long ? "h-[80%]" : "h-[45%]"
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
              disabled={isButtonDisabled}
              type={submit ? "submit" : "button"}
              onClick={() =>
                register ? doRegister() : writeData ? addData() : NextPos()
              }
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
