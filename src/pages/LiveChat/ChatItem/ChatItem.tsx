import clsx from "clsx";
import { useEffect } from "react";

interface Props {
  isAdmin: boolean;
  content: string | any;
}

const ChatItem: React.FC<Props> = ({ isAdmin, content }) => {
  useEffect(() => {
    document.getElementById("chat")?.scrollTo({
      top: document.getElementById("chat")?.scrollHeight,
      behavior: "smooth",
    });
  });
  return (
    <div
      className={clsx(
        "w-auto max-w-[80%] h-auto bg-variants py-1 px-2 rounded-md text-secondary",
        isAdmin ? "self-start" : "self-end"
      )}
    >
      <p>{content}</p>
    </div>
  );
};

export default ChatItem;
