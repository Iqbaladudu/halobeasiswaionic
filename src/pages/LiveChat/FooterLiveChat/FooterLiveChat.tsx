import { IonFooter, IonIcon, IonTextarea, IonToolbar } from "@ionic/react";
import { send } from "ionicons/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Chat, message } from "../../../store/ChatContent";
import { AppDispatch } from "../../../store/store";

import "./FooterLiveChat.css";

const LiveChatFooter = () => {
  const [text, setText] = useState<Chat>({
    content: "",
  });

  const dispatch: AppDispatch = useDispatch();

  const handleClick = async () => {
    dispatch(message(text.content));
    setText({ content: "" });
  };

  return (
    <IonFooter className="h-[100px] flex items-center justify-center bg-white ion-no-border gap-3">
      <IonToolbar className="w-[80%]">
        <IonTextarea
          inputMode="text"
          enterkeyhint="enter"
          required
          placeholder="Tulis pesan mu di sini"
          clearOnEdit={true}
          rows={2}
          className="custom-textarea bg-variants rounded-xl"
          name="message"
          value={text.content}
          onIonChange={(e) => setText({ content: e.target.value })}
        />
      </IonToolbar>
      <div
        onClick={() => handleClick()}
        className="bg-variants rounded-md px-2 py-[8px] mt-3 flex items-center justify-center"
      >
        <IonIcon icon={send} size="large" className="" />
      </div>
    </IonFooter>
  );
};

export default LiveChatFooter;
