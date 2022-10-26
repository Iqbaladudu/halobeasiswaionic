interface Props {
  date: string;
}

const TimeDivider: React.FC<Props> = ({ date }) => {
  return (
    <div className="bg-primary text-white px-1 py-1 w-[100px] text-center rounded-md self-center font-bold">
      <p>{date}</p>
    </div>
  );
};

export default TimeDivider;
