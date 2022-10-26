import { IonContent, IonPage } from "@ionic/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../../store/ChatContent";
import { AppDispatch, RootState } from "../../store/store";
import ChatItem from "./ChatItem/ChatItem";
import LiveChatFooter from "./FooterLiveChat/FooterLiveChat";
import LiveChatHeader from "./HeaderLiveChat/HeaderLiveChat";
import "dayjs/locale/id";

const LiveChat = () => {
  const [message, setMessage] = useState<string[]>([]);
  const { content } = useSelector((state: RootState) => state.chat);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    content && setMessage((message) => [...message, content]);
    dispatch(clear());
  }, [content, dispatch]);

  return (
    <IonPage>
      <LiveChatHeader />
      <IonContent>
        <div className="flex justify-center h-full w-[100%]">
          <div
            id="chat"
            className="h-auto flex flex-col w-[90%] pt-10 gap-3 overflow-scroll overflow-y-scroll scrollbar-hide"
          >
            {message.map((text, key) => (
              <ChatItem isAdmin={true} key={key} content={text} />
            ))}
          </div>
        </div>
      </IonContent>
      <LiveChatFooter />
    </IonPage>
  );
};

export default LiveChat;
