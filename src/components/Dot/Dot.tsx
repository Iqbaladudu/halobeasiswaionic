import clsx from "clsx";

interface Props {
  long?: boolean;
}

const Dot: React.FC<Props> = ({ long }) => {
  return (
    <div
      className={clsx("h-5 rounded-md bg-white", long ? "w-10" : "w-5")}
    ></div>
  );
};

export default Dot;
